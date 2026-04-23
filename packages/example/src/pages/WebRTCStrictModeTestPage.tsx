import type React from 'react';
import { useCallback, useEffect, useRef, useState } from 'react';
import { Button, PageHeader, Tag, WebRTCClient } from 'scorer-ui-kit';
import styled from 'styled-components';
import ExamplesFilename from '../components/ExamplesFilename';

// ─── Styled components ───────────────────────────────────────────────────────

const Container = styled.div`
  padding: 50px;
`;

const ExplanationBlock = styled.div`
  margin: 8px 0 24px;
  padding: 16px 20px;
  background: var(--grey-2);
  border-radius: 4px;
  border-left: 3px solid var(--primary-7);
  font-family: var(--font-data);
  font-size: 13px;
  line-height: 1.8;
  color: var(--grey-11);
`;

const ExParagraph = styled.p`
  margin: 0 0 10px;
  &:last-child { margin-bottom: 0; }
`;

const CodeBlock = styled.code`
  color: var(--primary-9);
  font-family: var(--font-data);
`;

const StepList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1px;
  margin-top: 6px;
`;

const StepRow = styled.div`
  display: grid;
  grid-template-columns: 90px 1fr;
`;

const StepNum = styled.span`
  font-weight: 600;
  color: var(--grey-12);
`;

const StepContent = styled.span`
  color: var(--grey-11);
`;

const ControlBar = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 20px;
`;

const StatusRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 16px;
`;

const StatusLabel = styled.span`
  font-family: var(--font-ui);
  font-size: 13px;
  color: var(--grey-9);
  min-width: 60px;
`;

const ConsolePanel = styled.div`
  background: var(--grey-1);
  border: 1px solid var(--grey-4);
  border-radius: 4px;
  padding: 16px;
  margin-top: 20px;
  max-height: 300px;
  overflow-y: auto;
  font-family: var(--font-data);
  font-size: 12px;
`;

const ConsoleLine = styled.div<{ $level: 'error' | 'debug' | 'info' }>`
  padding: 2px 0;
  color: ${({ $level }) =>
    $level === 'error'
      ? 'var(--danger-9)'
      : $level === 'debug'
        ? 'var(--grey-8)'
        : 'var(--grey-11)'};
`;

const ConsoleHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
`;

const ConsoleTitle = styled.span`
  font-family: var(--font-ui);
  font-size: 14px;
  font-weight: 500;
  color: var(--grey-12);
`;

const HiddenPlayer = styled.div`
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  opacity: 0;
`;

// ─── Console capture hook ────────────────────────────────────────────────────

interface LogEntry {
  level: 'error' | 'debug' | 'info';
  message: string;
  timestamp: string;
}

const useConsoleCapture = () => {
  const [logs, setLogs] = useState<LogEntry[]>([]);
  const originalError = useRef<typeof console.error | null>(null);
  const originalDebug = useRef<typeof console.debug | null>(null);

  useEffect(() => {
    originalError.current = console.error;
    originalDebug.current = console.debug;

    const addLog = (level: LogEntry['level'], args: unknown[]) => {
      const message = args
        .map((a) => (typeof a === 'object' ? JSON.stringify(a, null, 0) : String(a)))
        .join(' ');
      // Only capture WebSocket / WebRTC related messages
      if (
        message.toLowerCase().includes('websocket') ||
        message.toLowerCase().includes('webrtc') ||
        message.toLowerCase().includes('connect') ||
        message.toLowerCase().includes('cleanup') ||
        message.toLowerCase().includes('server') ||
        message.toLowerCase().includes('peer') ||
        message.toLowerCase().includes('hello') ||
        message.toLowerCase().includes('canceled')
      ) {
        setLogs((prev) => [
          ...prev,
          {
            level,
            message,
            timestamp: new Date().toLocaleTimeString(),
          },
        ]);
      }
    };

    console.error = (...args: unknown[]) => {
      addLog('error', args);
      originalError.current?.(...args);
    };

    console.debug = (...args: unknown[]) => {
      addLog('debug', args);
      originalDebug.current?.(...args);
    };

    return () => {
      if (originalError.current) console.error = originalError.current;
      if (originalDebug.current) console.debug = originalDebug.current;
    };
  }, []);

  const clearLogs = useCallback(() => setLogs([]), []);

  return { logs, clearLogs };
};

// ─── Page ────────────────────────────────────────────────────────────────────

const WebRTCStrictModeTestPage: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const [status, setStatus] = useState('Not connected');
  const [error, setError] = useState<string | null>(null);
  const { logs, clearLogs } = useConsoleCapture();

  const errorCount = logs.filter((l) => l.level === 'error').length;

  return (
    <Container>
      <PageHeader
        title='WebRTCPlayer — StrictMode Double-Mount'
        introductionText='Tests that mounting WebRTCPlayer in StrictMode does not produce WebSocket console errors. The connection is pointed at a non-routable address to trigger fast failure.'
      />

      <ExplanationBlock>
        <ExParagraph>
          <strong>Bug (issue #627):</strong> In React 18+ StrictMode, components are double-mounted
          (mount → cleanup → remount). <CodeBlock>WebRTCPlayer</CodeBlock> created a WebSocket
          immediately in <CodeBlock>useEffect</CodeBlock>. StrictMode&apos;s cleanup closed it
          before the connection was established, producing browser-level errors:
        </ExParagraph>
        <ExParagraph>
          <CodeBlock>
            WebSocket connection to &apos;ws://...&apos; failed: WebSocket is closed before the
            connection is established.
          </CodeBlock>
        </ExParagraph>
        <ExParagraph>
          <strong>Fix:</strong> Defer <CodeBlock>connectToPeer()</CodeBlock> with{' '}
          <CodeBlock>setTimeout(fn, 0)</CodeBlock> so StrictMode&apos;s synchronous cleanup cancels
          the timeout before a WebSocket is ever created. The second mount proceeds normally.
        </ExParagraph>
        <ExParagraph>
          <strong>Steps to test:</strong>
        </ExParagraph>
        <StepList>
          <StepRow>
            <StepNum>1.</StepNum>
            <StepContent>
              Click Mount below — the WebRTCPlayer component will mount in StrictMode
            </StepContent>
          </StepRow>
          <StepRow>
            <StepNum>2.</StepNum>
            <StepContent>
              Check the console capture panel — there should be no red error lines
            </StepContent>
          </StepRow>
          <StepRow>
            <StepNum>3.</StepNum>
            <StepContent>Try Unmount → Mount cycle to verify repeated mounts are clean</StepContent>
          </StepRow>
        </StepList>
      </ExplanationBlock>

      <ControlBar>
        <Button
          design={mounted ? 'secondary' : 'primary'}
          size='small'
          onClick={() => {
            setMounted((m) => !m);
            setError(null);
          }}
        >
          {mounted ? 'Unmount' : 'Mount'}
        </Button>
        <Button
          design='secondary'
          size='small'
          onClick={() => {
            setMounted(false);
            setError(null);
            setTimeout(() => setMounted(true), 50);
          }}
        >
          Remount
        </Button>
      </ControlBar>

      <StatusRow>
        <StatusLabel>Status:</StatusLabel>
        <Tag icon='' tagSize='compact' label={status} />
      </StatusRow>
      {error && (
        <StatusRow>
          <StatusLabel>Error:</StatusLabel>
          <Tag icon='' tagSize='compact' label={error} />
        </StatusRow>
      )}

      {mounted && (
        <HiddenPlayer>
          <WebRTCClient
            enabled
            peerAddress='ws://localhost:1/'
            maxConnectionAttempts={2}
            setStatus={setStatus}
            setError={setError}
          />
        </HiddenPlayer>
      )}

      <ConsolePanel>
        <ConsoleHeader>
          <ConsoleTitle>
            Console Capture{' '}
            {errorCount > 0 ? `(${errorCount} error${errorCount > 1 ? 's' : ''})` : '(clean)'}
          </ConsoleTitle>
          <Button design='secondary' size='small' onClick={clearLogs}>
            Clear
          </Button>
        </ConsoleHeader>
        {logs.length === 0 && (
          <ConsoleLine $level='info'>
            No WebSocket/WebRTC messages captured yet. Click Mount to start.
          </ConsoleLine>
        )}
        {logs.map((log, i) => (
          <ConsoleLine key={i} $level={log.level}>
            [{log.timestamp}] [{log.level.toUpperCase()}] {log.message}
          </ConsoleLine>
        ))}
      </ConsolePanel>

      <ExamplesFilename>WebRTCStrictModeTestPage.tsx</ExamplesFilename>
    </Container>
  );
};

export default WebRTCStrictModeTestPage;
