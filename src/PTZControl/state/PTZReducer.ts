export type PTZReducerActions =
  | ConnectStartAction
  | ConnectFailAction
  | ConnectSuccessAction
  // | DisconnectStartAction
  // | DisconnectFailAction
  | DisconnectSuccessAction
  | MoveStart
  | Stop
  | ZoomStart
  | Home
  | SetImage
  | PTZError
;

interface ConnectStartAction {
  type: 'CONNECTING';
  address: string;
}
interface ConnectFailAction {
  type: 'CONNECTION_FAIL';
  errorMessage: string;
}
interface PTZError {
  type: 'PTZ_ERROR';
  errorMessage: string;
}
interface ConnectSuccessAction {
  type: 'CONNECTED';
}
// interface DisconnectStartAction {
//   type: 'DISCONNECTING';
// }
// interface DisconnectFailAction {
//   type: 'DISCONNECT_FAIL';
// }
interface DisconnectSuccessAction {
  type: 'DISCONNECTED';
}
interface MoveStart {
  type: 'MOVE_START';
  direction: MoveDirections;
}
// interface MoveStop {
//   type: 'MOVE_STOP';
// }
interface ZoomStart {
  type: 'ZOOM_START';
  zooming: ZoomStates
}
interface SetImage {
  type: 'SET_IMAGE';
  image: string;
}
interface Stop {
  type: 'STOP';
}
interface Home {
  type: 'HOME';
}


export interface PTZCredentials {
  host: string;
  username: string;
  password: string;
}
type MoveDirections = 'left'|'right'|'up'|'down'|'home'|null;
type ZoomStates = 'in'|'out'|null;
export interface PTZState {
  connection: 'connected'|'connecting'|'error'|'disconnecting'|'disconnected';
  moving: MoveDirections;
  zooming: ZoomStates;
  loading: boolean;
  image: string;
  address?: string;
  errorMessage?: string;
}


export default (state : PTZState, action: PTZReducerActions): PTZState => {

  switch(action.type){
    case 'CONNECTING': {
      return {
        ...state,
        connection: 'connecting',
        address: action.address,
        loading: true,
        errorMessage: ''
      };
    }
    case 'CONNECTED': {
      return {
        ...state,
        connection: 'connected',
        loading: false
      };
    }
    case 'CONNECTION_FAIL': {
      return {
        ...state,
        loading: false,
        connection: 'error',
        errorMessage: action.errorMessage
      };
    }
    case 'PTZ_ERROR': {
      //UNHANDLED ERROR
      return {
        ...state,
        loading: false,
        errorMessage: action.errorMessage
      };
    }
    // case 'DISCONNECTING': {
    //   return {
    //     ...state,
    //     connection: 'disconnecting',
    //   };
    // }
    case 'DISCONNECTED': {
      return {
        image: '',
        connection: 'disconnected',
        moving: null,
        zooming: null,
        loading: false
      };
    }
    // case 'DISCONNECT_FAIL': {
    //   return {...state, connection: 'error'};
    // }
    case 'SET_IMAGE': {
      return {
        ...state,
        image: action.image
      };
    }
    case 'MOVE_START': {
      return {
        ...state,
        moving: action.direction,
      };
    }
    case 'STOP': {
      return {
        ...state,
        moving: null,
        zooming: null,
      };
    }
    case 'ZOOM_START': {
      return {
        ...state,
        zooming: action.zooming,
      };
    }
    case 'HOME': {
      return state;
    }

    default:
      console.error(`Action ${action['type']} not registered.`);
      return state;
  }
};





