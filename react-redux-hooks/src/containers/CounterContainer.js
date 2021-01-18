import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import Counter from "../components/Counter";
import { plus, minus } from "../modules/counter";

const CounterContainer = () => {
  const number = useSelector((state) => state.counter.number);
  const dispatch = useDispatch();
  const onPlus = useCallback(() => dispatch(plus()), [dispatch]);
  const onMinus = useCallback(() => dispatch(minus()), [dispatch]);
  return <Counter number={number} plus={onPlus} minus={onMinus} />;
};

export default React.memo(CounterContainer);
