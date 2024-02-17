import React from "react";
import classes from "./TodoItem.module.css";

// Step 1 - We create a new functional component TodoItem which takes a string as a prop.
// Step 2 - We could also pass todo: Todo as a prop and then access todo.text and todo.id in the component.
// Step 3 - In Todos.tsx we map through the items array and render a TodoItem for each item,
// passing text={item.text} as a prop to the TodoItem component.
// Step 4 - We also pass a function onRemoveTodo as a prop to the TodoItem component
// and attach it to the li element as an event listener.
const TodoItem: React.FC<{
  text: string;
  onRemoveTodo: () => void;
}> = (props) => {
  return (
    <li className={classes.item} onClick={props.onRemoveTodo}>
      {props.text}
    </li>
  );
};

export default TodoItem;
