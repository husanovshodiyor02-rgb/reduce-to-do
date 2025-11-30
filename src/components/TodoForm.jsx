import { useState } from "react";
import { useTodos } from "../context/TodoContext";

const TodoForm = () => {
  const { dispatch } = useTodos();
  const [text, setText] = useState("");

  const addTodo = (e) => {
    e.preventDefault();
    if (!text.trim()) return;

    dispatch({ type: "ADD_TODO", payload: text });
    setText("");
  };

  return (
    <form
      onSubmit={addTodo}
      className="flex gap-3 mt-5 bg-white p-4 rounded-xl shadow-lg"
    >
      <input
        className="border border-gray-300 p-3 w-full rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition"
        type="text"
        placeholder="Yangi vazifa yozing..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-5 py-3 rounded-xl shadow hover:opacity-90 transition">
        Add
      </button>
    </form>
  );
};

export default TodoForm;
