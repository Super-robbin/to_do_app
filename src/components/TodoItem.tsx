import React from "react";

// Step 1 - We create a new functional component TodoItem which takes a string as a prop.
// Step 2 - We could also pass todo: Todo as a prop and then access todo.text and todo.id in the component.
// Step 3 - In Todos.tsx we map through the items array and render a TodoItem for each item,
// passing text={item.text} as a prop to the TodoItem component.
const TodoItem: React.FC<{ text: string }> = (props) => {
  return <li>{props.text}</li>;
};

export default TodoItem;
