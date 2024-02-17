import React from "react";
import Todo from "../models/todo";
import TodoItem from "./TodoItem";
import classes from "./Todos.module.css";

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
const Todos: React.FC<{ items: Todo[]; onRemoveTodo: (id: string) => void }> = (
  props
) => {
  return (
    <ul className={classes.todos}>
      {props.items.map((item) => (
        <TodoItem
          key={item.id}
          text={item.text}
          onRemoveTodo={props.onRemoveTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
