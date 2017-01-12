import * as types from './actionTypes';

export function incrementTimer(payload) {
  return { type: types.INCREMENT_TIMER, payload};
}

export function decrementTimer(payload) {
  return { type: types.DECREMENT_TIMER, payload};
}
