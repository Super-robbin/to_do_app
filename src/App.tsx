import Todos from "./components/Todos";
import Todo from "./models/todo";

function App() {
  // We create new instances of the Todo class and pass a string to it (text property).
  // We then store the new instances in the todos array and pass it to the Todos component as prop.
  const todos = [new Todo("Learn React"), new Todo("Learn Typescript")];

  return (
    <div className="App">
      <Todos items={todos} />
    </div>
  );
}

export default App;
