import { IPointSet, IVector2 } from './';
import update from 'immutability-helper';

export type IReducerActions =
  | UpdateAction
  | LoadAction
  | AddSetAction
  | RemoveAction
  | AddPointAction
  | RemovePointAction
  | UpdateSetOptions
  | RenameSetAction
  ;

interface AddSetAction{
  type: 'ADD_SET';
  data: IPointSet;
}
interface UpdateAction {
  type: 'UPDATE'|'UPDATE_SET_POINTS';
  index: number;
  data: IPointSet;
}

interface RenameSetAction {
  type: 'RENAME_SET';
  index: number;
  data: {
    name: string;
  };
}
interface UpdateSetOptions {
  type: 'UPDATE_SET_OPTIONS';
  index: number;
  data: Partial<IPointSet>;
}
interface RemoveAction {
  type: 'REMOVE_SET';
  index: number;
}
interface LoadAction {
    type: 'LOAD';
    state: IPointSet[];
}
interface AddPointAction {
  type: 'ADD_POINT';
  index: number;
}
interface RemovePointAction {
  type: 'REMOVE_POINT';
  index: number;
}

const getMidpoint = (pointA : IVector2, pointB : IVector2) => {
  return({
    x: pointA.x + (pointB.x - pointA.x) * 0.5,
    y: pointA.y + (pointB.y - pointA.y) * 0.5
  });
};

export default (state : IPointSet[], action: IReducerActions) => {

  switch(action.type){
    //This UPDATE is better named 'UPDATE_SET_POINTS'
    case "UPDATE_SET_POINTS":
    case "UPDATE": {
      const points = action.data.points.map((point) => ({...point}));
      return update(state, {[action.index]: { points: {$set: points}}});
    }

    case "RENAME_SET": {
      const set = { ...state[action.index], name: action.data.name};
      return update(state, {[action.index]: {$set: set}});
    }

    case "UPDATE_SET_OPTIONS": {
      const set = { ...state[action.index], ...action.data};
      return update(state, {[action.index]: {$set: set}});
    }

    case "ADD_SET":
      return [...state, action.data];

    case "REMOVE_SET":
      return update(state, { $splice: [[action.index,1]]});

    case "ADD_POINT": {
      const newPoint: IVector2 = getMidpoint(state[action.index].points[0], state[action.index].points[1]);
      return update(state, {[action.index]: {points: {$splice: [[1, 0, newPoint]]}}});
    }

    case "REMOVE_POINT":
      if(state[action.index].points.length <= 2){ return state; }
      return update(state, {[action.index]: {points: {$splice: [[state[action.index].points.length - 1, 1]]}}});

    case 'LOAD': {
      const newState = action.state.map(
          ({name, points, ...rest}) => ({
            name,
            points: points.map( ({x,y}) => ({x,y}) ),
            ...rest
          })
        );
      return newState;
    }

    default:
      console.error(`Action ${action['type']} not registered.`);
      return state;
  }
};
