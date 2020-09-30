import React, { useReducer, useCallback, useEffect, useState } from 'react';
// import styled from 'styled-components';

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
} from 'scorer-ui-kit';


const Line: React.FC<{}> = () => {
  const [state, dispatch] = useReducer(LineReducer, []);
  const [error] = useState<string | null>('');

  const options = {
    showSetIndex: false
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
    ]
    dispatch({
      type: 'LOAD',
      state
    });
  }, []);

  const saveLine = useCallback(async () => {
  }, []);

  useEffect(() => {
    fetchLine();
  }, [fetchLine])

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
          <Button design="secondary" onClick={fetchLine} >Cancel</Button>
          <Button style={{ marginLeft: '10px' }} onClick={saveLine}>Save</Button>
        </SidebarBox>
      </Sidebar>
      <Content>
        {error && <div>{error}</div>}
        <LineSetContext.Provider value={{ state, dispatch }}>
          <LineUI options={options} src="https://i.picsum.photos/id/1026/4621/3070.jpg?hmac=OJ880cIneqAKIwHbYgkRZxQcuMgFZ4IZKJasZ5c5Wcw" />
        </LineSetContext.Provider>
      </Content>
    </Layout>
  );
}

export default Line;
