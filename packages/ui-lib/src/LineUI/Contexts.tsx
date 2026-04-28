import { createContext, type Dispatch } from 'react';
import type { IPointSet } from '.';
import type { IReducerActions } from './LineReducer';

interface IContextProps {
  state: IPointSet[];
  dispatch: Dispatch<IReducerActions>;
}

export const LineSetContext = createContext({} as IContextProps);
