import type React from 'react';
import { useCallback, useReducer, useState } from 'react';

import {
  ButtonWithIcon,
  Content,
  Input,
  Label,
  Layout,
  LineReducer,
  LineSetContext,
  LineUIVideo,
  Logo,
  Sidebar,
  SidebarBox,
  Switch,
} from 'scorer-ui-kit';
import type { LineUIOptions, LineUIVideoOptions } from 'scorer-ui-kit/dist/LineUI';
import styled from 'styled-components';
import ExamplesFilename from '../components/ExamplesFilename';

const DEFAULT_HLS_SRC =
  'https://devstreaming-cdn.apple.com/videos/streaming/examples/bipbop_16x9/bipbop_16x9_variant.m3u8';

const StyledButton = styled(ButtonWithIcon)`
  width: 100%;
  margin-bottom: 15px;
`;

const SrcRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 16px;
`;

const Note = styled.p`
  font-family: var(--font-data);
  font-size: 12px;
  color: var(--grey-11);
  margin: 8px 0 0;
  line-height: 1.5;
`;

const LineHLSPage: React.FC = () => {
  const [state, dispatch] = useReducer(LineReducer, []);

  const [srcInput, setSrcInput] = useState<string>(DEFAULT_HLS_SRC);
  const [src, setSrc] = useState<string>(DEFAULT_HLS_SRC);
  const [sensingBorder, setSensingBorder] = useState<string>('10');

  const [options, setOptions] = useState<LineUIOptions>({
    showSetIndex: true,
    pointIndexOffset: 1,
    showPointLabel: true,
    setIndexOffset: 1,
    showDirectionMark: false,
    showLabelShadow: false,
  });

  const [videoOptions] = useState<LineUIVideoOptions>({
    loop: true,
    autoPlay: true,
    muted: true,
  });

  const handleVideoLoaded = useCallback(({ width, height }: { width: number; height: number }) => {
    // Stroke-width on the click-sensing line is expressed in SVG viewBox units,
    // so it needs to track the actual video resolution rather than a CSS pixel constant.
    setSensingBorder(String(Math.max(4, Math.round(Math.min(width, height) * 0.015))));

    dispatch({
      type: 'LOAD',
      state: [
        {
          name: 'Line 1',
          points: [
            { x: width * 0.2, y: height * 0.55 },
            { x: width * 0.8, y: height * 0.55 },
          ],
          showPointHandle: true,
          showMoveHandle: true,
          showSmallDirectionMark: true,
          readOnly: false,
          styling: 'primary',
        },
        {
          name: 'Line 2',
          points: [
            { x: width * 0.25, y: height * 0.75 },
            { x: width * 0.75, y: height * 0.75 },
          ],
          showPointHandle: false,
          showMoveHandle: false,
          readOnly: false,
          styling: 'secondary',
        },
      ],
    });
  }, []);

  const handleLoadSrc = useCallback(() => {
    setSrc(srcInput);
  }, [srcInput]);

  const resetToDefault = useCallback(() => {
    setSrcInput(DEFAULT_HLS_SRC);
    setSrc(DEFAULT_HLS_SRC);
  }, []);

  const showDirection = useCallback((isChecked: boolean) => {
    setOptions((previous) => ({ ...previous, showDirectionMark: isChecked }));
  }, []);

  const showLabelTextShadow = useCallback((isChecked: boolean) => {
    setOptions((previous) => ({ ...previous, showLabelShadow: isChecked }));
  }, []);

  const selectLine = useCallback(
    (lineId: number) => {
      const deselectLineIndex = state.findIndex((item) => item.showPointHandle);
      dispatch({
        type: 'UPDATE_SET_OPTIONS',
        index: deselectLineIndex,
        data: { showPointHandle: false, showMoveHandle: false },
      });
      dispatch({
        type: 'UPDATE_SET_OPTIONS',
        index: lineId,
        data: { showPointHandle: true, showMoveHandle: true },
      });
    },
    [state]
  );

  return (
    <Layout>
      <ExamplesFilename>LineHLSPage.tsx</ExamplesFilename>

      <Sidebar>
        <Logo logoTextTop={'SCORER'} logoTextBottom={'UI Kit'} />

        <SidebarBox>
          <SrcRow>
            <Label htmlFor='hls-src' labelText='HLS source URL (.m3u8)' />
            <Input
              id='hls-src'
              type='text'
              value={srcInput}
              onChange={(e) => setSrcInput(e.target.value)}
              placeholder='https://.../stream.m3u8'
            />
            <StyledButton icon={'Play'} design='primary' onClick={handleLoadSrc}>
              Load Stream
            </StyledButton>
            <StyledButton icon={'RetryJob'} design='secondary' onClick={resetToDefault}>
              Reset to Default
            </StyledButton>
          </SrcRow>

          <Switch
            checked={options.showDirectionMark}
            labelText='Show Direction Mark'
            leftTheme='off'
            onChangeCallback={showDirection}
            rightTheme='on'
            state='default'
          />
          <br />
          <Switch
            checked={options.showLabelShadow}
            labelText='Show Label Shadow'
            leftTheme='off'
            onChangeCallback={showLabelTextShadow}
            rightTheme='on'
            state='default'
          />

          <Note>
            Default stream is Apple's public BipBop HLS test. Safari plays it natively; other
            browsers dynamically load <code>hls.js</code>. Open DevTools → Network and filter for{' '}
            <code>hls</code> to confirm the chunk is only fetched on this page.
          </Note>
        </SidebarBox>

        <SidebarBox style={{ flex: '1' }}>
          <pre>{JSON.stringify(state, null, 2)}</pre>
        </SidebarBox>
      </Sidebar>

      <Content $padBottom={false}>
        <LineSetContext.Provider value={{ state, dispatch }}>
          <LineUIVideo
            key={src}
            options={options}
            onLineClick={selectLine}
            onLoaded={handleVideoLoaded}
            videoOptions={videoOptions}
            lineClickSensingBorder={sensingBorder}
            src={src}
          />
        </LineSetContext.Provider>
      </Content>
    </Layout>
  );
};

export default LineHLSPage;
