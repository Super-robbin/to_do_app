import React from "react";
import Todo from "../models/todo";

// React.FC is a generic type which turns the function into a functional component.
// We then <{}> to say thatFC type is generic and the concrete value I'm plugging in now
// is my own props object where I describe my own props for this specific functional component.
// We can now use the props object to access the items prop, map through it and render a list of items.
// IMPORTANT: The Todos component in App will throw an error if we don't pass the items prop.
// UPDATE: We replace items: [] with items: Todo[] to make it more specific.
const Todos: React.FC<{ items: Todo[] }> = (props) => {
  return (
    <ul>
      {props.items.map((item) => (
        <li key={item.id}>{item.text}</li>
      ))}
    </ul>
  );
};

export default Todos;
