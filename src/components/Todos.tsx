import React, { useContext } from "react";
import TodoItem from "./TodoItem";
import classes from "./Todos.module.css";
import { TodosContext } from "../store/todos-context";

// React.FC is a generic type which turns the function into a functional component.
// We then <{}> to say thatFC type is generic and the concrete value I'm plugging in now
// is my own props object where I describe my own props for this specific functional component.
// We can now use the props object to access the items prop, map through it and render a list of items.
// IMPORTANT: The Todos component in App will throw an error if we don't pass the items prop.

// UPDATE: We replace items: [] with items: Todo[] to make it more specific.
// We also add onRemoveTodo.bind(null, item.id) as a prop to the Todos component.
// Bind() is a default method in JavaScript which allows us to pre-configure a function for future execution.
// We first of all set what this keyword will refer to in this to be called function,
// and we don't care about that here so, I'll set that to null.
// Then we set the first argument onRemoveTodo will receive later and that should be that id here, so item.id.

// UPDATE: We are using the useContext hook to get access to the TodosContext object. Therefore,
// we don't need to pass the items and onRemoveTodo props to the Todos component anymore.
// We change Todos: React.FC<{ items: Todo[]; onRemoveTodo: (id: string) => void }> = (props)
// to the simplified version below.
const Todos: React.FC = () => {
  const todosCtx = useContext(TodosContext);

  return (
    <ul className={classes.todos}>
      {todosCtx.items.map((item) => (
        <TodoItem
          key={item.id}
          text={item.text}
          onRemoveTodo={todosCtx.removeTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
