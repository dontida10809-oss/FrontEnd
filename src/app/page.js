"use client";

import { useEffect, useState } from "react";
import { getTodos, addTodo, deleteTodo } from "../lib/api";

export default function Home() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");

  useEffect(() => {
    getTodos().then((data) => {
      const fixed = data.map((t) => ({
        ...t,
        completed: Boolean(t.completed),
      }));
      setTodos(fixed);
    });
  }, []);

  const handleAdd = async () => {
    if (!title.trim()) return;
    const newTodo = await addTodo(title);
    setTodos([...todos, {...newTodo, completed: false},
    ]);
    setTitle("");
  };

  const handleDelete = async (id) => {
    await deleteTodo(id);
    setTodos(todos.filter((t) => t.id !== id));
  };

  const handleToggle = (id) => {
    setTodos((prev) =>
    prev.map((t) =>
    t.id === id
    ? {...t, completed: !t.completed }
    : t
   )
  );
  };

  

  return (
    <main className=" bg-blue-100 w-full flex justify-center ">
      <div className="w-[480px] bg-white rounded-2xl shadow-lg p-6">
        
        {/* Header */}
        <h1 className="text-center text-3xl font-bold mb-4">
          To Do List 📝
        </h1>

        {/* Input */}
        <div className="flex gap-2 mb-4">
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Add new task"
            className="flex-1 px-4 py-3 rounded-full border focus:outline-none"
          />
          <button
            onClick={handleAdd}
            className="px-4 py-2 rounded-full bg-blue-400 text-white font-medium"
          >
            Add
          </button>
        </div>

        {/* Todo List */}
        <ul className="space-y-3">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className={`flex items-center justify-between rounded-2xl px-3 py-2 transition
                ${todo.completed ? "bg-gray-300 opacity-60" : "bg-gray-200"}
                `}
            >
              <div className="flex items-center gap-3">
                <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => handleToggle(todo.id)}
                className="w-4 h-4 accent-blue-500 cursor-pointer"
                />
                <span className={`text-m
                   ${todo.completed ? "line-through text-gray-500" : ""}
                   `}
                   >
                    {todo.title}
                   </span>
              </div>

              <button
                onClick={() => handleDelete(todo.id)}
                className="text-gray-600 hover:text-red-500"
              >
                🗑️
              </button>
            </li>
          ))}
        </ul>

      </div>
    </main>
  );
}
