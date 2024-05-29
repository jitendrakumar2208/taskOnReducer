import React, { useContext } from "react";
import TodoItem from "./TodoItem";
import { TodoContext } from "../context";

function TodoList() {
  const { todos, dispatch } = useContext(TodoContext);

  const toggleTodo = (index) => {
    dispatch({ type: "TOGGLE_TODO", payload: index });
  };

  const editTodo = (index, newText) => {
    dispatch({ type: "EDIT_TODO", payload: { index, newText } });
  };

  const deleteTodo = (index) => {
    dispatch({ type: "DELETE_TODO", payload: index });
  };

  return (
    <ul>
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          index={index}
          todo={todo}
          toggleTodo={toggleTodo}
          editTodo={editTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </ul>
  );
}

export default TodoList;
