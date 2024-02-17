import { useRef, useContext } from "react";
import classes from "./NewTodo.module.css";
import { TodosContext } from "../store/todos-context";

// Step 1 - We use React.FC to turn the function into a functional component.
// Step 2 - We then <{}> and pass onAddTodo as a prop to the NewTodo component.
// Step 3 - To define a function type, we use the arrow function syntax,
// which describes the return type of the function after the arrow.
// Here, we use void because the function doesn't return anything.
// Step 4 - Now we have to pass a parameter to the function (text: string), otherwise we get an error below,
// when we try to props.onAddTodo(enteredText) in submitHandler.
// Step 5 - We can now create the function in App.tsx and pass it to the NewTodo component as a prop.

// UPDATE: We are using the useContext hook to get access to the TodosContext object. Therefore,
// we don't need to pass the items and onRemoveTodo props to the Todos component anymore.
// We change NewTodo: React.FC<{ onAddTodo: (text: string) => void }> = (props)
// to the simplified version below.
const NewTodo: React.FC = () => {
  const todosCtx = useContext(TodosContext);
  // We use HTMLInputElement which has a built-in type property.
  // For a button, it would be HTMLButtonElement. For a paragraph, it would be HTMLParagraphElement.
  // IMPORTANT: We have to provide a starting value (null in this case) otherwise we get an error
  // below when we use ref={} in the input element.
  const todoTextInputRef = useRef<HTMLInputElement>(null);

  // For the event object, we can use the type React.FormEvent.
  // If we pass React.MouseEvent to onSubmit, we get an error.
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    // We get autocompletion with current?.value because the ref is not necessarily set
    // to a value yet when we use it. So the ? signals to Typescript that it tries to access value
    // and if that succeeds, the entered value will be stored in enteredText
    // but if that fails, if the connection should not be established yet,
    // null will be stored in enteredText.
    // If you know that a connection is established, you can use current!.value,
    // only use it if you are 100% sure that the value can't be null or undefined.
    const enteredText = todoTextInputRef.current!.value;

    if (enteredText.trim().length === 0) {
      // We can throw an error
      return;
    }

    todosCtx.addTodo(enteredText);
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor="text">Todo text</label>
      <input ref={todoTextInputRef} type="text" id="text" />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
