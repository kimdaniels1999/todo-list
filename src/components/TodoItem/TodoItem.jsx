import React from "react";
import "./TodoItem.css";

function TodoItem(props) {
    const { todo } = props;
    return <div className="todo">{todo.text}</div>;
}
export default TodoItem;
