import { createContext } from 'react';
import type { IPointSet } from '.';

interface IContextProps {
  state: IPointSet[]; // IState;
  dispatch: any; // ({type}:{type:any}) => void;
}

export const LineSetContext = createContext({} as IContextProps);
