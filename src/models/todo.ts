
// Step 1 - We define the Todo class, which has two properties: id: string and text: string. 
// We could use type and it would work anyway.
// Step 2 - We then define a constructor which takes a todoText: string.
// Now we have type annotations on the properties and the constructor parameter.
// Step 3 - We set the text property to the todoText parameter 
// and the id property to a new Date().toISOString() value.
class Todo {
    id: string;
    text: string;

    constructor(todoText: string) {
        this.text = todoText;
        this.id = new Date().toISOString();
    }
}

export default Todo;
