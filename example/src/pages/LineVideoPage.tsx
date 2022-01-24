import React, { useReducer, useCallback, useEffect, useState } from 'react';
// import styled from 'styled-components';

import {
  LineReducer,
  LineSetContext,
  Sidebar,
  SidebarBox,
  Layout,
  LineUIVideo,
  Content,
  Logo,
  ButtonWithIcon,
} from 'scorer-ui-kit';
import styled from 'styled-components';
import {LineUIOptions} from '../../../dist/LineUI';
import {LineUIVideoOptions} from '../../../dist/LineUI';

const StyledButton = styled(ButtonWithIcon)`
  width: 100%;
  margin-bottom: 15px;
`

const Line: React.FC<{}> = () => {
  const [state, dispatch] = useReducer(LineReducer, []);
  const [error] = useState<string | null>('');

  const [options] = useState<LineUIOptions>({
    showSetIndex: true,
    pointIndexOffset: 1,
    showPointLabel: true,
    setIndexOffset: 1,
    showDirectionMark: true
  });

  const [videoOptions]= useState<LineUIVideoOptions>({
    loop: true,
    autoPlay: true
  });

  const fetchLine = useCallback(async () => {
    const state = [
      {
        name: 'Line 1',
        points: [
          {
            x: 968,
            y: 1297
          },
          {
            x: 1849,
            y: 1393
          }
        ],
        styling: 'primary'
      },
      {
        name: 'Shape 1',
        areaName: 'Traffic Area',
        points: [
          {
            x: 502,
            y: 453
          },
          {
            x: 1067,
            y: 581
          },
          {
            x: 776,
            y: 982
          },
          {
            x: 376,
            y: 782
          }
        ],
        readOnly: false,
        styling: 'secondary'
      }
    ];

    dispatch({
      type: 'LOAD',
      state
    });
  }, []);

  const addSet = useCallback( () => {
    dispatch({
      type: 'ADD_SET',
      data: {
        points: [
          {
            x: 0,
            y: 0
          },
          {
            x: 500,
            y: 0
          },
          {
            x: 500,
            y: 500
          },
          {
            x: 0,
            y: 500
          }
        ]
      }
    });
  }, []);

  const removeSet = useCallback( (index = 0) => {
    dispatch({
      type: 'REMOVE_SET',
      index
    });
  }, []);

  const removePoint = useCallback( (index = 0) => {
    dispatch({
      type: 'REMOVE_POINT',
      index
    });
  }, []);

  const addPoint = useCallback( (index = 0) => {
    dispatch({
      type: 'ADD_POINT',
      index
    });
  }, []);

  useEffect(() => {
    fetchLine();
  }, [fetchLine])

  return (
    <Layout >
      <Sidebar>
        <Logo logoTextTop={'SCORER'} logoTextBottom={'UI Kit'} />

        <SidebarBox>
          <StyledButton icon={'Add'} design='primary' onClick={addSet} >Add Shape</StyledButton>

          <StyledButton icon={'Add'} design='primary' onClick={()=>addPoint(state.length-1)} >Add Point</StyledButton>

          <StyledButton icon={'Delete'} design='danger' onClick={()=>removePoint(state.length-1)} >Remove Point</StyledButton>

          <StyledButton  icon={'Delete'}  design='danger' onClick={()=>removeSet(state.length-1)} >Remove Shape</StyledButton>

        </SidebarBox>
        <SidebarBox style={{ flex: '1' }} >
          <pre>
            {JSON.stringify(state, null, 2)}
          </pre>
        </SidebarBox>
      </Sidebar>
      <Content padBottom={false}>
        {error && <div>{error}</div>}
        <LineSetContext.Provider value={{ state, dispatch }}>
          <LineUIVideo options={options} videoOptions={videoOptions} src='/scorer-ui-kit/traffic.mp4' />
        </LineSetContext.Provider>
      </Content>
    </Layout>
  );
}

export default Line;
