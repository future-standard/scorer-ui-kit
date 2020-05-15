import { IPointSet, IVector2 } from "./typings";

type IReducerActions =
  | UpdateAction
  | LoadAction
  | AddSetAction
  | RemoveAction
  | AddPointAction
  | RemovePointAction;

interface AddSetAction{
  type: 'ADD_SET';
  index: number;
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

  let newState : IPointSet[];
  let newPosition : IVector2;

  switch(action.type){

    case "UPDATE":
      newState = [...state];
      newState[action.index] = {...action.data};
      return [...newState];

    case "ADD_SET":
      return [...state, action.data];

    case "REMOVE_SET":
      newState = [...state];
      newState.splice(action.index, 1);
      return newState;

    case "ADD_POINT":
      newState = [...state];
      newPosition = getMidpoint(newState[action.index].points[0], newState[action.index].points[1]);
      newState[action.index].points.splice(1, 0, newPosition);
      return newState;

    case "REMOVE_POINT":
      if(state[action.index].points.length <= 2){ return state; };

      newState = [...state];
      newState[action.index].points.splice( newState[action.index].points.length - 1, 1);
      return newState;

    case 'LOAD':
      newState = [ ...(
        action.state.map(
          ({name, points}) => ({
            name,
            points: [
              ...points.map( ({x,y}) => ({
                x,
                y
              }))
            ]
          })
        )
      )]
      return [...action.state];

    default:
      console.error(`Action ${action['type']} not registered.`);
      return state;
  }
};
