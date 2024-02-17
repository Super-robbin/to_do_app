import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import TodosContextProvider from "./store/todos-context";

function App() {
  // We create new instances of the Todo class and pass a string to it (text property).
  // We then store the new instances in the todos array and pass it to the Todos component as prop.
  // UPDATE: We replaced the initial dummy array with useState and we use Todo[]
  // meaning that the state will manage an array of Todo objects.
  // const [todos, setTodos] = useState<Todo[]>([]);

  // We create a function addTodoHandler which takes a string as a parameter and pass it
  // to the NewTodo component as a prop. We then call the function in the NewTodo component.
  // We now const newTodo and create a new instance of the Todo class and pass the text to it.
  // We then setTodos and use the previous todos and concat (creates a new array) the newTodo to it.
  // const addTodoHandler = (text: string) => {
  //   const newTodo = new Todo(text);
  //   setTodos((prevTodos) => {
  //     return prevTodos.concat(newTodo);
  //   });
  // };

  // We can either pass the todoId down to the TodoItem component and then pass it to the onRemoveTodo,
  // or we can do onRemoveTodo={props.onRemoveTodo.bind()} in Todos.
  // const removeTodoHandler = (todoId: string) => {
  //   setTodos((prevTodos) => {
  //     return prevTodos.filter((todo) => todo.id !== todoId);
  //   });
  // };

  return (
    <TodosContextProvider>
      <NewTodo />
      <Todos />
    </TodosContextProvider>
  );
}

export default App;
