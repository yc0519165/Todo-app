import { useState } from "react";

const Demo = () => {
  const [todos, setTodos] = useState([]); // List of todos
  const [completedTodos, setCompletedTodos] = useState([]); // List of completed todos
  const [newTodo, setNewTodo] = useState("");

  // Add a new todo

  const addTodo = () => {
    if (newTodo.trim() === "") return;
    setTodos([{ id: Date.now(), text: newTodo, completed: false }, ...todos]);
    setNewTodo("");
  };

  // Delete a todo
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // Mark a todo as completed
  const markAsCompleted = (id) => {
    const completedTodo = todos.find((todo) => todo.id === id);
    if (completedTodo) {
      completedTodo.completed = true;
      setTodos(todos.filter((todo) => todo.id !== id));
      setCompletedTodos([...completedTodos, completedTodo]);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-lg mx-auto bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Todo App</h1>

        {/* Add Todo Section */}
        <div className="flex items-center mb-4">
          <input
            type="text"
            placeholder="Add a todo..."
            className="flex-grow p-2 border rounded-lg outline-none mr-2"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
          />
          <button
            onClick={addTodo}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          >
            Add
          </button>
        </div>

        {/* Todo List */}
        <ul>
          {todos.map((todo) => (
            <li
              key={todo.id}
              className="flex justify-between items-center p-2 border-b"
            >
              <span>{todo.text}</span>
              <div className="flex space-x-2">
                <button
                  onClick={() => markAsCompleted(todo.id)}
                  className="text-green-500 hover:text-green-700"
                >
                  Complete
                </button>
                <button
                  onClick={() => deleteTodo(todo.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>

        {/* Completed Todos Section */}
        {completedTodos.length > 0 && (
          <div className="mt-6">
            <h2 className="text-lg font-semibold text-gray-700 mb-2">
              Completed Todos
            </h2>
            <ul>
              {completedTodos.map((todo) => (
                <li
                  key={todo.id}
                  className="p-2 bg-gray-100 rounded-lg mb-2 shadow text-gray-600 line-through"
                >
                  {todo.text}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Demo;
