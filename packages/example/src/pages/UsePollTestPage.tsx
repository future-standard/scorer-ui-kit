import type React from 'react';
import { useCallback, useEffect, useRef, useState } from 'react';
import { Button, PageHeader, Tag, usePoll } from 'scorer-ui-kit';
import styled from 'styled-components';
import ExamplesFilename from '../components/ExamplesFilename';

const POLL_INTERVAL = 2000;

// ─── Local reproduction of the pre-fix usePoll pattern ───────────────────────
// Exists solely for the side-by-side comparison on this page.
// Do NOT import or use this outside of this file.
const useBrokenPoll = (callback = () => {}, interval = 1000) => {
  const timeoutIDRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const callbackRef = useRef<() => void>(callback);
  const canceled = useRef<boolean>(false);

  const pollOnce = useCallback(async () => {
    if (timeoutIDRef.current !== null) {
      clearTimeout(timeoutIDRef.current);
      timeoutIDRef.current = null;
    }
    await callbackRef.current();
    if (!canceled.current) {
      timeoutIDRef.current = setTimeout(pollOnce, interval);
    }
  }, [interval]);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    // Bug: canceled.current is still `true` from the StrictMode cleanup.
    // On remount, pollOnce() runs once, finds canceled.current === true
    // after the async callback, and never schedules the next poll.
    pollOnce();
    return () => {
      canceled.current = true;
      if (timeoutIDRef.current !== null) {
        clearTimeout(timeoutIDRef.current);
        timeoutIDRef.current = null;
      }
    };
  }, [pollOnce]);
};
// ─────────────────────────────────────────────────────────────────────────────

const Container = styled.div`
  padding: 50px;
`;

const PanelsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  margin-top: 24px;
`;

const Panel = styled.div<{ $variant: 'broken' | 'fixed' }>`
  border-radius: 4px;
  border: 1px solid ${({ $variant }) =>
    $variant === 'broken' ? 'var(--caution-8)' : 'var(--success-8)'};
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const PanelTitle = styled.h3`
  font-family: var(--font-ui);
  font-size: 16px;
  font-weight: 500;
  color: var(--grey-12);
  margin: 0;
`;

const StatsBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 92px;
`;

const StatRow = styled.div`
  display: flex;
  align-items: baseline;
  gap: 10px;
`;

const StatLabel = styled.span`
  font-family: var(--font-ui);
  font-size: 12px;
  color: var(--grey-9);
  min-width: 88px;
`;

const CountValue = styled.span`
  font-family: var(--font-data);
  font-size: 28px;
  font-weight: 600;
  color: var(--grey-12);
`;

const TimeValue = styled.span`
  font-family: var(--font-data);
  font-size: 14px;
  color: var(--grey-11);
`;

const UnmountedPlaceholder = styled.div`
  padding: 20px;
  height: 92px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-family: var(--font-ui);
  font-size: 13px;
  color: var(--grey-8);
  background: var(--grey-2);
  border-radius: 3px;
`;

const TextParagraph = styled.p`
  font-family: var(--font-ui);
  color: var(--grey-11);
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
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
  &:last-child {
    margin-bottom: 0;
  }
`;

const CodeBlock = styled.code`
  color: var(--primary-9);
  font-family: var(--font-data);
`;

const BugNote = styled.span`
  color: var(--caution-9);
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

// ─── Liveness detector ───────────────────────────────────────────────────────
// Returns true while ticks are arriving regularly; flips to false when no tick
// has been received for longer than 1.4 × POLL_INTERVAL.
const useIsPolling = (count: number): boolean => {
  const [isPolling, setIsPolling] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (count === 0) return;
    setIsPolling(true);
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => setIsPolling(false), Math.round(POLL_INTERVAL * 1.4));
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [count]);

  return isPolling;
};

// ─── Shared stats display ─────────────────────────────────────────────────────

interface PollStatsProps {
  count: number;
  lastPolled: string;
  isPolling: boolean;
}

const PollStats: React.FC<PollStatsProps> = ({ count, lastPolled, isPolling }) => {
  const statusLabel = count === 0 ? 'Waiting…' : isPolling ? 'Polling continuously' : 'Stopped';

  const statusIcon = count === 0 ? '' : isPolling ? 'Success' : 'BigWarning';

  return (
    <StatsBlock>
      <StatRow>
        <StatLabel>Poll count</StatLabel>
        <CountValue>{count}</CountValue>
      </StatRow>
      <StatRow>
        <StatLabel>Last polled</StatLabel>
        <TimeValue>{lastPolled}</TimeValue>
      </StatRow>
      <StatRow>
        <StatLabel>Status</StatLabel>
        <Tag tagSize='compact' label={statusLabel} icon={statusIcon} />
      </StatRow>
    </StatsBlock>
  );
};

// ─── Demo inner components ────────────────────────────────────────────────────

const BrokenPollDemo: React.FC = () => {
  const [count, setCount] = useState(0);
  const [lastPolled, setLastPolled] = useState('—');
  const isPolling = useIsPolling(count);

  const tick = useCallback(() => {
    setCount((c) => c + 1);
    setLastPolled(new Date().toLocaleTimeString());
  }, []);

  useBrokenPoll(tick, POLL_INTERVAL);

  return <PollStats count={count} lastPolled={lastPolled} isPolling={isPolling} />;
};

const FixedPollDemo: React.FC = () => {
  const [count, setCount] = useState(0);
  const [lastPolled, setLastPolled] = useState('—');
  const isPolling = useIsPolling(count);

  const tick = useCallback(() => {
    setCount((c) => c + 1);
    setLastPolled(new Date().toLocaleTimeString());
  }, []);

  usePoll(tick, POLL_INTERVAL);

  return <PollStats count={count} lastPolled={lastPolled} isPolling={isPolling} />;
};

// ─── Page ─────────────────────────────────────────────────────────────────────

const UsePollTestPage: React.FC = () => {
  const [brokenMounted, setBrokenMounted] = useState(true);
  const [fixedMounted, setFixedMounted] = useState(true);

  return (
    <Container>
      <PageHeader
        title='usePoll — StrictMode Fix'
        introductionText='Side-by-side comparison of usePoll before and after the StrictMode canceled-ref fix. In development (StrictMode active), the Before panel polls once then stops; the After panel polls continuously. Use Unmount / Remount to reset and replay.'
      />

      <ExplanationBlock>
        <ExParagraph>
          ⚠️ The difference is only visible in development builds with React StrictMode active. In
          production both panels behave identically.
        </ExParagraph>
        <ExParagraph>
          <strong>React 16 &amp; 17:</strong> StrictMode double-invokes <em>render functions</em>{' '}
          only. <CodeBlock>useEffect</CodeBlock> callbacks run <strong>once</strong> on mount.{' '}
          <CodeBlock>canceled.current</CodeBlock> starts as <CodeBlock>false</CodeBlock>,{' '}
          <CodeBlock>pollOnce()</CodeBlock> fires, the check{' '}
          <CodeBlock>if (!canceled.current)</CodeBlock> passes, and the chain keeps scheduling. No
          bug.
        </ExParagraph>
        <ExParagraph>
          <strong>React 18 &amp; 19:</strong> StrictMode was extended to also double-invoke{' '}
          <em>effects</em> — it simulates mount → cleanup → remount to help surface bugs. The
          sequence becomes:
        </ExParagraph>
        <StepList>
          <StepRow>
            <StepNum>1. Mount</StepNum>
            <StepContent>
              → <CodeBlock>useEffect</CodeBlock> runs → <CodeBlock>canceled.current</CodeBlock> is
              false → <CodeBlock>pollOnce()</CodeBlock> starts
            </StepContent>
          </StepRow>
          <StepRow>
            <StepNum>2. Cleanup</StepNum>
            <StepContent>
              → <CodeBlock>canceled.current</CodeBlock> = true (timer cleared)
            </StepContent>
          </StepRow>
          <StepRow>
            <StepNum>3. Remount</StepNum>
            <StepContent>
              → <CodeBlock>useEffect</CodeBlock> runs again → <CodeBlock>pollOnce()</CodeBlock>{' '}
              called
            </StepContent>
          </StepRow>
          <StepRow>
            <span />
            <StepContent>→ callback fires (async await)</StepContent>
          </StepRow>
          <StepRow>
            <span />
            <StepContent>
              → checks <CodeBlock>canceled.current</CodeBlock> → still true{' '}
              <BugNote>← bug stops here</BugNote>
            </StepContent>
          </StepRow>
          <StepRow>
            <span />
            <StepContent>→ never schedules next poll</StepContent>
          </StepRow>
        </StepList>
      </ExplanationBlock>

      <PanelsGrid>
        <Panel $variant='broken'>
          <PanelTitle>Before — broken pattern</PanelTitle>
          <TextParagraph>
            <CodeBlock>canceled.current</CodeBlock> is never reset on remount. In StrictMode the
            cleanup sets it to <CodeBlock>true</CodeBlock>; on remount{' '}
            <CodeBlock>pollOnce()</CodeBlock> runs once, sees{' '}
            <CodeBlock>canceled === true</CodeBlock>, and never schedules the next poll.
          </TextParagraph>
          {brokenMounted ? (
            <BrokenPollDemo />
          ) : (
            <UnmountedPlaceholder>
              Component unmounted — click Remount to replay
            </UnmountedPlaceholder>
          )}
          <Button design='secondary' size='small' onClick={() => setBrokenMounted((m) => !m)}>
            {brokenMounted ? 'Unmount' : 'Remount'}
          </Button>
        </Panel>

        <Panel $variant='fixed'>
          <PanelTitle>After — fixed pattern</PanelTitle>
          <TextParagraph>
            <CodeBlock>canceled.current = false</CodeBlock> is set at the top of the effect, before{' '}
            <CodeBlock>pollOnce()</CodeBlock> is called. The StrictMode remount resets the flag and
            polling continues on schedule.
          </TextParagraph>
          {fixedMounted ? (
            <FixedPollDemo />
          ) : (
            <UnmountedPlaceholder>
              Component unmounted — click Remount to replay
            </UnmountedPlaceholder>
          )}
          <Button design='secondary' size='small' onClick={() => setFixedMounted((m) => !m)}>
            {fixedMounted ? 'Unmount' : 'Remount'}
          </Button>
        </Panel>
      </PanelsGrid>

      <ExamplesFilename>UsePollTestPage.tsx</ExamplesFilename>
    </Container>
  );
};

export default UsePollTestPage;
