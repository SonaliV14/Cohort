import { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([
    {
      title: "go to gym",
      description: "do gym 8-9",
      completed: false
    },
    {
      title: "do dsa",
      description: "do dsa 9-11",
      completed: true
    }
  ]);

  function addTodo() {
    setTodos([
      ...todos,
      {
        title: "new todo",
        description: "desc for new todo",
        completed: false
      }
    ]);
  }

  return (
    <div>
      <button onClick={addTodo}>Add more todo</button>
      {todos.map((todo, index) => (
        <Todo
          key={index}
          title={todo.title}
          description={todo.description}
          completed={todo.completed}
        />
      ))}
    </div>
  );
}

function Todo(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>{props.description}</h2>
      <p>{props.completed ? "Completed" : "Not Completed"}</p>
    </div>
  );
}

export default App;
