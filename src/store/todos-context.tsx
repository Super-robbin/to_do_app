import React from "react";
import Todo from "../models/todo";

type TodosContextObj = {
  items: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
};

// Step 1 - We create a new context with React.createContext and pass an object to it.
// The object has three properties: items, addTodo and removeTodo.
// Step 2 - We then define the type of the context object with React.createContext<{}>.
// Here we have items: Todo[] which is an array of Todo objects, addTodo: () => void
// and removeTodo: (id: string) => void which are both functions that don't return anything.
export const TodosContext = React.createContext<TodosContextObj>({
  items: [],
  addTodo: () => {},
  removeTodo: (id: string) => {},
});

// Step 3 - We create a new functional component TodosContextProvider which takes props as an argument
// and we copy from the App component the useState, the addTodoHandler and removeTodoHandler functions.
const TodosContextProvider: React.FC = (props) => {
  const [todos, setTodos] = React.useState<Todo[]>([]);

  const addTodoHandler = (text: string) => {
    const newTodo = new Todo(text);
    setTodos((prevTodos) => {
      return prevTodos.concat(newTodo);
    });
  };

  const removeTodoHandler = (todoId: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== todoId);
    });
  };

  // Step 4 - We create a new context object with the items, addTodo and removeTodo properties.
  const contextValue: TodosContextObj = {
    items: todos,
    addTodo: addTodoHandler,
    removeTodo: removeTodoHandler,
  };

  // Step 5 - We use the value prop to pass the context object to the TodosContext.Provider.
  // We then use the addTodoHandler and removeTodoHandler functions as values
  // for the addTodo and removeTodo properties.
  // Step 6 - We wrap the props.children in the TodosContext.Provider
  // to make the context object available to all components.
  return (
    <TodosContext.Provider value={contextValue}>
      {props.children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;