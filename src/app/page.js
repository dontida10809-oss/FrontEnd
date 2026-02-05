"use client";

import { useEffect, useState } from "react";
import { getTodos, addTodo, deleteTodo } from "../lib/api";

export default function Home() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");

  useEffect(() => {
    getTodos().then(setTodos);
  }, []);

  const handleAdd = async () => {
    if (!title.trim()) return;
    const newTodo = await addTodo(title);
    setTodos([...todos, newTodo]);
    setTitle("");
  };

  const handleDelete = async (id) => {
    await deleteTodo(id);
    setTodos(todos.filter((t) => t.id !== id));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-pink-200">
      <div className="bg-white p-6 rounded-xl shadow w-[320px]">
        <h1 className="text-xl font-bold mb-4">📝 Todo List</h1>

        <div className="flex gap-2 mb-4">
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border px-3 py-2 rounded w-full"
            placeholder="Add new todo..."
          />
          <button
            onClick={handleAdd}
            className="bg-pink-500 text-white px-4 rounded"
          >
            Add
          </button>
        </div>

        <ul className="space-y-2">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className="flex items-center justify-between border px-3 py-2 rounded"
            >
              <span>{todo.title}</span>
              <button
                onClick={() => handleDelete(todo.id)}
                className="text-red-500 font-bold"
              >
                ✕
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
