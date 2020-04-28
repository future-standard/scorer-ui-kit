import React, { useContext } from 'react';
import styled from 'styled-components';

import { LineSetContext } from './Contexts';

const DebugContainer = styled.div`
  position: absolute;
  right: 0;
  top: 20px;
  bottom: 20px;
  display: flex;
  flex-direction: column;
  width: 400px;
  height: auto;
  box-shadow: 0 10px 20px hsl(205deg, 45%, 5%, 35%);
  background: hsla(195deg, 45%, 35%, 45%);
  border-radius: 3px 0 0 3px;

  padding: 0 10px;
  margin: 0;
  box-sizing: border-box;

  > div {
    flex: 0;
  }

  button {
    display: block;
    border: none;
    background: hsl(195deg, 90%, 45%);
    padding: 10px;
    width: 100%;
    font-size: 16px;
    margin: 10px 0;
    color: white;
    flex: 0;
    border-radius: 2px;
  }
`

const DebugOutput = styled.pre`
  color: #fff;
  text-align: left;
  background: hsl(205deg, 15%, 5%);
  padding: 20px;
  overflow: auto;
  border-radius: 2px;
  flex: 1;

`

interface IControlProps {

}

export const Control : React.FC<IControlProps> = () => {

  const {state, dispatch} = useContext(LineSetContext);

  return <DebugContainer>

    <div>
      <button onClick={ () => dispatch({type: "ADD_SET"}) }>Add Set</button>

      {state.map((_lineSet, index) => (
        <div key={index}>
          <h5>Set {index}</h5>
          <button onClick={ () => dispatch({type: "REMOVE_SET", index: index}) }>Remove Set</button>
          <button onClick={ () => dispatch({type: "ADD_POINT", index: index}) }>Add Point</button>
          <button onClick={ () => dispatch({type: "REMOVE_POINT", index: index}) }>Remove Point</button>
        </div>
      ))}

    </div>

    <DebugOutput>
      { JSON.stringify(state, null, 2) }
    </DebugOutput>

  </DebugContainer>

};

export default Control;