import { createStore } from "redux";

// DOM
const toggle = document.querySelector(".toggle");
const count = document.getElementById("count");
const btnPlus = document.getElementById("plus");
const btnMinus = document.getElementById("minus");

// Action Title
const TOGGLE_SWITCH = "TOGGLE_SWITCH";
const PLUS = "PLUS";
const MINUS = "MINUS";

// Action Function
const toggleSwitch = () => ({
  type: TOGGLE_SWITCH,
});
const plus = (number) => ({
  type: PLUS,
  number,
});
const minus = () => ({
  type: MINUS,
});

// Initial State
const initialState = {
  toggle: false,
  count: 0,
};

// Reducer
function reducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_SWITCH:
      return {
        ...state,
        toggle: !state.toggle,
      };
    case PLUS:
      return {
        ...state,
        count: state.count + action.number,
      };
    case MINUS:
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state;
  }
}

// Store
const store = createStore(reducer);

// Render
const render = () => {
  const state = store.getState();
  if (state.toggle) {
    toggle.classList.add("active");
  } else {
    toggle.classList.remove("active");
  }
  count.innerText = state.count;
};

render();

// Subscribe
store.subscribe(render);

// Dispatch
toggle.onclick = () => {
  store.dispatch(toggleSwitch());
  console.log(store.getState());
};
btnPlus.onclick = () => {
  store.dispatch(plus(2));
};
btnMinus.onclick = () => {
  store.dispatch(minus());
};
