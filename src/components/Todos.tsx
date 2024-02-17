import React from "react";

// React.FC is a generic type which turns the function into a functional component.
// We then <{}> to say thatFC type is generic and the concrete value I'm plugging in now
// is my own props object where I describe my own props for this specific functional component.
// We can now use the props object to access the items prop, map through it and render a list of items.
// IMPORTANT: The Todos component in App will throw an error if we don't pass the items prop.
const Todos: React.FC<{ items: string[] }> = (props) => {
  return (
    <ul>
      {props.items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
};

export default Todos;
