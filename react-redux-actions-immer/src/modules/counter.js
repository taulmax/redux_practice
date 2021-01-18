import { createAction, handleActions } from "redux-actions";

const PLUS = "counter/PLUS";
const MINUS = "counter/MINUS";

export const plus = createAction(PLUS);

export const minus = createAction(MINUS);

const initialState = {
  number: 0,
};

const counter = handleActions(
  {
    [PLUS]: (state, action) => ({ number: state.number + 1 }),
    [MINUS]: (state, action) => ({ number: state.number - 1 }),
  },
  initialState
);

export default counter;
