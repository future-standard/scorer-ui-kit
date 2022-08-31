import { createContext } from 'react';
import { IPointSet } from '.';

interface IContextProps {
    state: IPointSet[]// IState;
    dispatch: any// ({type}:{type:any}) => void;
  }

export const LineSetContext = createContext({} as IContextProps);
