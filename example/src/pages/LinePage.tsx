import React, {  useReducer, useCallback, useEffect, useState } from 'react';
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
  const [error] = useState<string|null>('');

  const fetchLine = useCallback(async () => {
    // try{
    //   const response = await fetch('/api/line');
    //   if (!response.ok) {
    //     throw await response.json()
    //   }
    //   const {points} = await response.json();
      const state = [
        {
          points: [
              {x: 1000, y: 2000},
              {x: 2000, y: 2000}
          ],
          readOnly: false,
          name: 'Line 1',
          styling: 'primary'
        },
        {
          points: [
              {x: 1500, y: 1500},
              {x: 2500, y: 2500}
          ],
          readOnly: false,
          name: 'Line 2',
          styling: 'secondary'
        },
        {
          points: [
              {x: 500, y: 500},
              {x: 1000, y: 1000}
          ],
          readOnly: false,
          name: 'Yikes!',
          styling: 'danger'
        }
      ]
      dispatch({
        type: 'LOAD',
        state
      });
    // } catch (error) {
    //   setError(error.message);
    // }
  },[]);

  const saveLine = useCallback(async () => {
    // try {
    //   const response = await fetch('/api/line', {
    //     method: 'PUT',
    //     body: JSON.stringify(state[0]),
    //     headers: {
    //         'Content-Type': 'application/json'
    //     }
    //   });
    //   if (!response.ok) {
    //     throw await response.json()
    //   }

    // } catch (error) {
    //   setError(error.message);
    // }
  // },[ state ]);
  },[ ]);

  useEffect(()=>{
    fetchLine();
  },[fetchLine])

  return (
    <Layout >
      <Sidebar>
        <Logo logoTextTop={'SCORER'} logoTextBottom={'UI Kit'} />
        {/* <SidebarBox>
          <BackLink to="/" >Back</BackLink>
        </SidebarBox> */}
        <SidebarBox style={{flex: '1'}} >
          <pre>
            {JSON.stringify(state,null,2)}
          </pre>
        </SidebarBox>
        <SidebarBox>
          <Button design="secondary" onClick={fetchLine} >Cancel</Button>
          <Button style={{marginLeft: '10px'}} onClick={saveLine}>Save</Button>
        </SidebarBox>
      </Sidebar>
      <Content>
        { error && <div>{error}</div>}
        <LineSetContext.Provider value={{state, dispatch}}>
          <LineUI options={{showSetIndex: true}} src="https://i.picsum.photos/id/1026/4621/3070.jpg?hmac=OJ880cIneqAKIwHbYgkRZxQcuMgFZ4IZKJasZ5c5Wcw" />
        </LineSetContext.Provider>
      </Content>
    </Layout>
  );
}

export default Line;
