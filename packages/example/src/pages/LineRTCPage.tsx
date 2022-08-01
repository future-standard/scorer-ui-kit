import React, { useReducer, useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';

import {
  LineReducer,
  LineSetContext,
  Sidebar,
  SidebarBox,
  Layout,
  Content,
  TextField,
  LineUIRTC,
  Logo,
  Button,
  AlertBar,
  Switch,
  useMediaModal
} from 'scorer-ui-kit';
import { LineUIOptions, LineUIVideoOptions } from 'scorer-ui-kit/dist/LineUI';

const SwitchBox = styled.div`
  margin-bottom: 15px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  margin: 20px 0;
  justify-content: flex-end;
`;

const Line: React.FC<{}> = () => {
  const [state, dispatch] = useReducer(LineReducer, []);
  const [error] = useState<string | null>('');
  const [ws, setWS] = useState('localhost/wsapp');
  const [wsURL, setWsURL] = useState('');
  const [isShowDirection, setShowDirection] = useState<boolean>(false);
  const {createMediaModal} = useMediaModal();

  const [videoOptions, setVideoOptions]= useState<LineUIVideoOptions>({
    loop: true,
    autoPlay: true
  });

  const options : LineUIOptions = {
    showSetIndex: true,
    setIndexOffset: 1,
    showDirectionMark: isShowDirection
  }

  const fetchLine = useCallback(async () => {
    const state = [{
      name: "Line 1",
      points: [
          {
            x: 1407,
            y: 869
          },
          {
            x: 2293,
            y: 531
          }
        ],
        readOnly: false,
        styling: "primary"
      },
      {
        name: "Line 2",
        points: [
          {
            x: 1426,
            y: 254
          },
          {
            x: 2260,
            y: 283
          }
        ],
        "readOnly": false,
        "styling": "secondary"
      },
      {
        name: "Yikes!",
        points: [
          {
            x: 500,
            y: 500
          },
          {
            x: 1000,
            y: 1000
          }
        ],
        readOnly: false,
        styling: "danger"
      }
    ];

    dispatch({
      type: 'LOAD',
      state
    });
  }, []);

  const saveLine = useCallback(async () => {
  }, []);

  useEffect(() => {
    fetchLine();
  }, [fetchLine]);

  const connect = useCallback(()=>{
    if(!ws){return;}
    setWsURL(ws);
  },[ws]);

  const showDirection = useCallback((isChecked: boolean) => {
    setShowDirection(isChecked);
  }, []);

  const handleModalClose = useCallback(() => {
    setVideoOptions({
      loop: true,
      autoPlay: true
    })
  }, []);

  const handleMediaModal = useCallback(() => {
    setVideoOptions({
      loop: false,
      autoPlay: false,
      muted: true,
    })

    createMediaModal({ mediaType: 'video', src: `ws://${wsURL}/`, dismissCallback: handleModalClose })
  }, [createMediaModal, handleModalClose, wsURL])

  return (
    <Layout >
      <Sidebar>
        <Logo logoTextTop={'SCORER'} logoTextBottom={'UI Kit'} />
        <SidebarBox style={{ flex: '1' }} >
          <pre>
            {JSON.stringify(state, null, 2)}
          </pre>
        </SidebarBox>
        <SidebarBox>
          <SwitchBox>
            <Switch checked={isShowDirection} labelText='Show Direction Mark' leftTheme='off' onChangeCallback={showDirection} rightTheme='on' state='default' />
          </SwitchBox>
          <Button design="secondary" onClick={fetchLine} >Cancel</Button>
          <Button style={{ marginLeft: '10px' }} onClick={saveLine}>Save</Button>
        </SidebarBox>
      </Sidebar>
      <Content>
        {error && <AlertBar message={error} type='error' /> }
        <TextField label='Host' name='host' fieldState='default' value={ws} onChange={({target:{value}})=> setWS(value)} ></TextField>
        <Button onClick={connect}>Connect</Button>
        {
          wsURL && <>
            <LineSetContext.Provider value={{ state, dispatch }}>
              <LineUIRTC ws={`ws://${wsURL}/`} {...{videoOptions, options}}/>
            </LineSetContext.Provider>
            <ButtonWrapper>
              <Button onClick={handleMediaModal}>Open Video Modal</Button>
            </ButtonWrapper>
          </>

        }
      </Content>
    </Layout>
  );
}

export default Line;
