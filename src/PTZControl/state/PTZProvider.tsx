import React from 'react';
import { createContext } from "react";
import { PTZReducerActions, PTZState } from "./PTZReducer";
import usePTZ from "./usePTZ";

export interface IPTZContext {
  state: PTZState,
  dispatch: React.Dispatch<PTZReducerActions>
  actions: PTZActions
}
interface PTZActions {
  move: ({direction}:{direction: 'up'|'down'|'left'|'right'}) => void;
  zoom: ({zooming}: {zooming: 'in'|'out'}) => void;
  stop: () => void;
  connect: (params: {username: string, password: string, host: string, port?: number}) => void;
  disconnect: () => void;
}

export const PTZContext = createContext<IPTZContext>({state: {} as PTZState, dispatch: ()=>{}, actions: {} as PTZActions});

interface Props {
  socketUrl?: string;
  imageRefresh: number
}

const PTZProvider: React.FC<Props> = ({socketUrl ='ws://localhost/wsapp/', imageRefresh = 500, children}) => {

  const {state, dispatch, actions} = usePTZ({socketUrl, imageRefresh});

  return (
    <PTZContext.Provider value={{state, dispatch, actions}}>
      {children}
    </PTZContext.Provider>
  );
};

export default PTZProvider;