import { useState } from "react";
import { useTodos } from "../context/TodoContext";

const TodoItem = ({ todo }) => {
  const { dispatch } = useTodos();
  const [editMode, setEditMode] = useState(false);
  const [value, setValue] = useState(todo.text);

  const saveEdit = () => {
    dispatch({ type: "EDIT_TODO", payload: { id: todo.id, text: value } });
    setEditMode(false);
  };

  return (
    <div className="bg-white p-5 rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition mb-4">
      {editMode ? (
        <input
          className="border p-3 w-full rounded-xl mb-4 focus:ring-2 ring-blue-500 outline-none"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      ) : (
        <p className="font-semibold text-xl">{todo.text}</p>
      )}

      <div className="text-sm text-gray-500 mt-1">
        Qo‘shildi: {todo.createdAt}
      </div>

      {todo.updatedAt && (
        <div className="text-sm text-blue-500">
          O‘zgartirildi: {todo.updatedAt}
        </div>
      )}

      <div className="flex gap-3 mt-4">
        {editMode ? (
          <button
            onClick={saveEdit}
            className="bg-green-600 text-white px-4 py-2 rounded-xl hover:opacity-90 transition"
          >
            Save
          </button>
        ) : (
          <button
            onClick={() => setEditMode(true)}
            className="bg-yellow-500 text-white px-4 py-2 rounded-xl hover:opacity-90 transition"
          >
            Edit
          </button>
        )}

        <button
          onClick={() => dispatch({ type: "DELETE_TODO", payload: todo.id })}
          className="bg-red-600 text-white px-4 py-2 rounded-xl hover:opacity-90 transition"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
