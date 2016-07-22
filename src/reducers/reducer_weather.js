import {FETCH_WEATHER} from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER:
      //return state.concat([action.payload.data]);
      //This is the same, but ES6 format
      //We want to concatenate rather than push onto the array so we don't nutate state,
      //but instead return new state
      return [ action.payload.data, ...state ];
  }

  return state;
}
