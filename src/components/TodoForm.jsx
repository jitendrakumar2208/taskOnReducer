import React, { useState, useContext } from "react";
import { TodoContext } from "../context";

function TodoForm() {
  const [value, setValue] = useState("");
  const { dispatch } = useContext(TodoContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    dispatch({ type: "ADD_TODO", payload: value });
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        className="border p-2 rounded w-full dark:text-black"
        placeholder="Add a new task"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button
        type="submit"
        className="bg-blue-500 text-white p-2 rounded mt-2 w-full hover:bg-blue-700"
      >
        Add Todo
      </button>
    </form>
  );
}

export default TodoForm;
