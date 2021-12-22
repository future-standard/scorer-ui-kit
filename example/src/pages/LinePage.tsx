import React, { useReducer, useCallback, useEffect, useState } from 'react';
// import styled from 'styled-components';
import {ArrowIcon} from '../svg';
import {
  LineReducer,
  LineSetContext,
  Sidebar,
  SidebarBox,
  Layout,
  Content,
  LineUI,
  Logo,
  Button,
  TextField,
  Label,
  Input
} from 'scorer-ui-kit';
import { LineUIOptions } from '../../../dist/LineUI';

const Line: React.FC<{}> = () => {
  const [state, dispatch] = useReducer(LineReducer, []);
  const [error] = useState<string | null>('');

  const [options, setOptions] = useState<LineUIOptions>({
    showSetIndex: true,
    pointIndexOffset: 1,
    showPointLabel: true,
    setIndexOffset: 1,
    showMoveHandle: false,
    fixedImgDimensions: {
      x: 2310,
      y: 1535
    },
    boundaryOffset: 0
  });

  const fetchLine = useCallback(async () => {
    const state = [{
      name: 'UP',
      points: [
          {
            x: 100,
            y: 200
          },
          {
            x: 300,
            y: 200
          }
        ],
        readOnly: false,
        styling: 'primary',
        centerIcon: ArrowIcon,
        centerIconPosition: 'UP'
      },
      {
        name: 'DOWN',
        points: [
            {
              x: 200,
              y: 400
            },
            {
              x: 400,
              y: 400
            }
          ],
          readOnly: false,
          styling: 'primary',
          centerIcon: ArrowIcon,
          centerIconPosition: 'DOWN'
        }
    ];

    dispatch({
      type: 'LOAD',
      state
    });
  }, []);

  const renameLine = useCallback( ({target: {value}}: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: 'RENAME_SET',
      index: 0,
      data: {
        name: value
      }
    });
  }, []);

  const toggleReadOnly = useCallback((index=0) => () => {
    dispatch({
      type: 'UPDATE_SET_OPTIONS',
      index,
      data: {
        readOnly: !(state[0]?.readOnly)
      }
    });
  }, [state]);

  const toggleOptions = useCallback((option: keyof LineUIOptions) => () => {
    setOptions({...options, [option]: !options[option]});
  }, [options]);

  // const saveLine = useCallback(async () => {
  // }, []);

  useEffect(() => {
    fetchLine();
  }, [fetchLine])

  const updateBoudaryOffset =  useCallback( ({target: {value}}: React.ChangeEvent<HTMLInputElement>) => {
    setOptions({...options, boundaryOffset: parseInt(value) });
  }, [options]);

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
          <Label labelText='Show Point Handle' htmlFor='showPointHandle' >
            <input type='checkbox' name='showPointHandle' checked={options.showPointHandle} onChange={toggleOptions('showPointHandle')}/>
          </Label>
          <Label labelText='Show Move Handle' htmlFor='showMoveHandle' >
            <input type='checkbox' name='showMoveHandle' checked={options.showMoveHandle} onChange={toggleOptions('showMoveHandle')}/>
          </Label>
          <Label labelText='Show Point' htmlFor='showPoint' >
            <input type='checkbox' name='showPoint' checked={options.showPoint} onChange={toggleOptions('showPoint')}/>
          </Label>
        </SidebarBox>
        <SidebarBox>
          <TextField label='Rename Line' fieldState='default' name='rename' value={state[0]?.name ||''} onChange={renameLine}/>
          <Label labelText='Boundary Offset' htmlFor='boundaryOffset' >
            <Input type='number' name='boundaryOffset' min={0} value={options.boundaryOffset} onChange={updateBoudaryOffset}/>
          </Label>
        </SidebarBox>
        <SidebarBox>
          <Button design="secondary" onClick={toggleReadOnly()} >Toggle Read Only</Button>
          {/* <Button style={{ marginLeft: '10px' }} onClick={saveLine}>Save</Button> */}
        </SidebarBox>
      </Sidebar>
      <Content padBottom={false}>
        {error && <div>{error}</div>}
        <LineSetContext.Provider value={{ state, dispatch }}>
          <LineUI options={options} src="https://i.picsum.photos/id/1026/4621/3070.jpg?hmac=OJ880cIneqAKIwHbYgkRZxQcuMgFZ4IZKJasZ5c5Wcw" />
        </LineSetContext.Provider>
      </Content>
    </Layout>
  );
}

export default Line;
