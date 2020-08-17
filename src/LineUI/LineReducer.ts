import { IPointSet, IVector2 } from "./typings";
import update from 'immutability-helper';

type IReducerActions =
  | UpdateAction
  | LoadAction
  | AddSetAction
  | RemoveAction
  | AddPointAction
  | RemovePointAction;

interface AddSetAction{
  type: 'ADD_SET';
  data: IPointSet;
}
interface UpdateAction {
  type: 'UPDATE';
  index: number;
  data: IPointSet;
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

    case "UPDATE":
      return update(state, {[action.index]: {$merge: action.data}});

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
      const newState = [ ...(
        action.state.map(
          ({name, points, ...rest}) => ({
            name,
            points: [
              ...points.map( ({x,y}) => ({
                x,
                y
              }))
            ],
            ...rest
          })
        )
      )];
      return newState;
    }

    default:
      console.error(`Action ${action['type']} not registered.`);
      return state;
  }
};
