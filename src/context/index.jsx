import React, { createContext, useReducer } from "react";

export const TodoContext = createContext();

const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, { text: action.payload, completed: false }];
    case "TOGGLE_TODO":
      return state.map((todo, index) =>
        index === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    case "EDIT_TODO":
      return state.map((todo, index) =>
        index === action.payload.index
          ? { ...todo, text: action.payload.newText }
          : todo
      );
    case "DELETE_TODO":
      return state.filter((_, index) => index !== action.payload);
    case "SEARCH_TODO":
      return state.filter((item) => item.text === action.payload);
    default:
      return state;
  }
};

export const TodoProvider = ({ children }) => {
  const [todos, dispatch] = useReducer(todoReducer, []);

  return (
    <TodoContext.Provider value={{ todos, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};
