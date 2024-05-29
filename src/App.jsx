import { useContext, useState } from "react";
import { ThemeProvider } from "./ThemeContext";

import ThemeToggle from "./components/ThemeToggle";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { TodoContext } from "./context";

const App = () => {
  const { dispatch } = useContext(TodoContext);
  const [search, setSearch] = useState("");
  const handleSearch = () => {
    dispatch({ type: "SEARCH_TODO", payload: search });
  };
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center ">
        <div className="">
          <ThemeToggle />
        </div>
        <div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-200 p-8 rounded shadow-md w-full max-w-md">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-bold">Todo App</h1>
          </div>
          <TodoList />
          <TodoForm />
        </div>
        <div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-200 p-8 rounded shadow-md w-full max-w-md ml-5">
          <div>
            <h1 className="text-2xl font-bold">Search Todo</h1>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button onClick={handleSearch}>Search</button>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};
export default App;
