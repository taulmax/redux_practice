import React from "react";
import { connect } from "react-redux";
import Counter from "../components/Counter";
import { minus, plus } from "../modules/counter";

const CounterContainer = ({ number, plus, minus }) => {
  return <Counter number={number} plus={plus} minus={minus} />;
};

const mapStateToProps = (state) => ({
  number: state.counter.number,
});

const mapDispatchToProps = (dispatch) => ({
  plus: () => {
    dispatch(plus());
  },
  minus: () => {
    dispatch(minus());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);
