import React, { useState } from "react";

function TodoItem({ todo, index, toggleTodo, editTodo, deleteTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  const handleEdit = () => {
    if (isEditing) {
      editTodo(index, newText);
    }
    setIsEditing(!isEditing);
  };

  return (
    <li
      className={`flex items-center justify-between p-2 mb-2 border rounded ${
        todo.completed ? "line-through text-gray-400" : ""
      }`}
    >
      {isEditing ? (
        <input
          type="text"
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
          className="border p-1 rounded w-full dark:text-black"
        />
      ) : (
        <span onClick={() => toggleTodo(index)}>{todo.text}</span>
      )}
      <div>
        <button
          onClick={handleEdit}
          className="text-blue-500 hover:text-blue-700 ml-2"
        >
          {isEditing ? "Save" : "Edit"}
        </button>
        <button
          onClick={() => deleteTodo(index)}
          className="text-red-500 hover:text-red-700 ml-2"
        >
          Delete
        </button>
      </div>
    </li>
  );
}

export default TodoItem;
