import React from "react";
import { useSelector } from "react-redux";
import Todos from "../components/Todos";
import { useActions } from "../lib/useActions";
import { changeInput, insert, remove, toggle } from "../modules/todos";

const TodosContainer = () => {
  const input = useSelector((state) => state.todos.input);
  const todos = useSelector((state) => state.todos.todos);

  const [onChangeInput, onInsert, onToggle, onRemove] = useActions([changeInput, insert, toggle, remove], []);

  return <Todos input={input} todos={todos} onChangeInput={onChangeInput} onInsert={onInsert} onToggle={onToggle} onRemove={onRemove} />;
};

export default React.memo(TodosContainer);
