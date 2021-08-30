// This File Tells What Action Are And What We Are Going To Perform

import {INCREMENT, DECREMENT} from './actions.types';
export const increment = () => ({
  type: INCREMENT,
});

export const decrement = () => ({
  type: DECREMENT,
});
