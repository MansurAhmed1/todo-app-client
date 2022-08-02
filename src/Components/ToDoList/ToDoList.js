/** @format */

import React, { useEffect, useState } from "react";
import UpdateTodo from "../UpdateTodo/UpdateTodo";
import Todo from "./Todo";
import "./ToDoList.css";

const ToDoList = () => {
  const [update, setUpdate] = useState(false);
  const [updatedData, setUpdatedData] = useState("");
  const [todos, setTodos] = useState([]);


  useEffect(() => {
    fetch("https://hidden-anchorage-98570.herokuapp.com/todos")
      .then((res) => res.json())
      .then((data) => setTodos(data));
  }, [todos]);

console.log(todos)
  const updateData = (id) => {
    setUpdatedData(id);
  };

  return (
    <div>

      {update && (
        <UpdateTodo
          setUpdate={setUpdate}
          updatedData={updatedData}
        ></UpdateTodo>
      )}

      {todos.map((todo, index) => (
        <Todo
          key={index}
          todo={todo}
          index={index}
          updateData={updateData}
          setUpdate={setUpdate}
        ></Todo>
      ))}
    </div>
  );
};

export default ToDoList;
