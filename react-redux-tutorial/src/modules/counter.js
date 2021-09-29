// 액션
const PLUS = "counter/PLUS";
const MINUS = "counter/MINUS";

// 액션 생성 함수
export const plus = () => ({
  type: PLUS,
});

export const minus = () => ({
  type: MINUS,
});

// 초기값
const initialState = {
  number: 0,
};

// 리듀서
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
