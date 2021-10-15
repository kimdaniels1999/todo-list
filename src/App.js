import React, { useState } from "react";
import TodoItem from "./components/TodoItem/TodoItem";
import TodoForm from "./components/TodoForm/TodoForm";
import "./App.css";

function App() {
  // const [todos, setTodos ] = useState ([
  //   'Finish plus project',
  //   'Feed Cat',
  //   'Be Awesome'
  // ])

  const [todos, setTodos] = useState ([
    {
    text:"Learn about React",
    isCompleted: false,
    },
    {
    text:"Meet friend for lunch",
    isCompleted: false,
    },
    {
    text:"Build really cool todo app",
    isCompleted: false,
    },
  ]);

  const addTodo = (text) => {
    const newTodos = [...todos, { text }];

    setTodos(newTodos);
  }

  const completeTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;

    setTodos(newTodos);

  };


  return (
    <div className="app">
    <div className="todo-list">
      <h1>My todo list</h1>

      {todos.map((todo, index) => {
        <TodoItem todo={todo} key={index}index={index} completeTodo={completeTodo}/>
      })}

      <TodoForm addTodo={addTodo} />
    </div>
    </div>
  );
}

export default App;