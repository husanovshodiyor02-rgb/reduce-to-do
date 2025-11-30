import { useState } from "react";
import { useTodos } from "../context/TodoContext";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const { todos } = useTodos();
  const [search, setSearch] = useState("");

  const filtered = todos.filter((t) =>
    t.text.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="mt-7">
      <input
        className="border border-gray-300 p-3 w-full rounded-xl mb-5 shadow focus:ring-2 ring-blue-500 outline-none transition"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {filtered.length === 0 ? (
        <p className="text-gray-500 text-center mt-5">Hech narsa topilmadi…</p>
      ) : (
        filtered.map((todo) => <TodoItem key={todo.id} todo={todo} />)
      )}
    </div>
  );
};

export default TodoList;
