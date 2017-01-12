import initialState from './initialState';

export default function counterReducer(state = initialState.counter , action) {
 switch(action.type){
   case 'INCREMENT_TIMER':
    return state + 1;
   case 'DECREMENT_TIMER':
    return state - 1;
  default:
    return state;
 }
}
