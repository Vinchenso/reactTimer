import * as types from './actionTypes';

export function incrementTimer() {
  return { type: types.INCREMENT_TIMER };

}

export function decrementTimer() {
  return { type: types.DECREMENT_TIMER };
}
