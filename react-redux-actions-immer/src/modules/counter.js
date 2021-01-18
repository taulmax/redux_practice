const PLUS = "counter/PLUS";
const MINUS = "counter/MINUS";

export const plus = () => ({
  type: PLUS,
});

export const minus = () => ({
  type: MINUS,
});

const initialState = {
  number: 0,
};

function counter(state = initialState, action) {
  switch (action.type) {
    case PLUS:
      return { number: state.number + 1 };
    case MINUS:
      return { number: state.number - 1 };
    default:
      return state;
  }
}

export default counter;
