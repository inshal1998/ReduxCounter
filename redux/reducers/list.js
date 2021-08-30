// This is the place where all logic are going to be saved

import {INCREMENT, DECREMENT} from '../actions/actions.types';

const initialState = {
  counter: 100,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        counter: state.counter + 1,
      };
    case DECREMENT:
      return {
        ...state,
        counter: state.counter - 1,
      };
    default:
      return state;
  }
};
