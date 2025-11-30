import { createContext, useContext, useReducer } from "react";

const TodoContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          id: Date.now(),
          text: action.payload,
          createdAt: new Date().toLocaleString(),
          updatedAt: null,
        },
      ];

    case "DELETE_TODO":
      return state.filter((t) => t.id !== action.payload);

    case "EDIT_TODO":
      return state.map((t) =>
        t.id === action.payload.id
          ? {
              ...t,
              text: action.payload.text,
              updatedAt: new Date().toLocaleString(),
            }
          : t
      );

    default:
      return state;
  }
};

export const TodoProvider = ({ children }) => {
  const [todos, dispatch] = useReducer(reducer, []);

  return (
    <TodoContext.Provider value={{ todos, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};

export const useTodos = () => useContext(TodoContext);
