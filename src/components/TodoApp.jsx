import { useState } from "react";
import { Added } from "./Added";
import { Deleted } from "./Deleted";
// import { Added } from "./Added";
// import { Deleted } from "./Deleted";

export const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [completedTodos, setCompletedTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const addTodo = () => {
    if (newTodo.trim() == "") return;
    setTodos([{ id: Date.now(), text: newTodo, complete: false }, ...todos]);
    setNewTodo("");
  };

  const deleteTodos = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const completedAsMark = (id) => {
    const completedTodo = todos.find((todo) => todo.id === id);
    if (completedTodo) {
      completedTodo.complete = true;
      setTodos(todos.filter((todo) => todo.id !== id));
      setCompletedTodos([...completedTodos, completedTodo]);
    }
  };

  return (
    <>
      <div className="h-screen w-full bg-[#0D0714] flex flex-col items-center justify-start gap-7 p-6">
        <div className="w-[350px] flex justify-between">
          <div className="border-b-2">
            <input
              className="text-[#777777] rounded-lg bg-transparent text-xl font-medium p-2 outline-0"
              type="text"
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
              placeholder="Add a new task"
            />
          </div>
          <button
            onClick={addTodo}
            className="p-2 rounded-lg w-14 bg-[#9E78CF] text-xl"
          >
            <i className="bx bx-plus"></i>
          </button>
        </div>
        <div className="flex flex-col gap-7">
          <Added
            todos={todos}
            completedAsMark={completedAsMark}
            deleteTodos={deleteTodos}
          />
          <Deleted completedTodos={completedTodos} />
        </div>
      </div>
    </>
  );
};
