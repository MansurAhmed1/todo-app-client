/** @format */

import React from "react";
import "./Addtodo.css";
import "react-toastify/dist/ReactToastify.css";

const Addtodo = () => {


/////////////////add todo or post todo///////////////////
  const handleOnSubmit = (e) => {
    e.preventDefault();
    const toDo = e.target.input.value;
    const data = { toDo };
    const url = "http://localhost:5000/todo";
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then((res) => res.json())
      .then((inserted) => {
        if (inserted.insertedId) {
      
          e.target.reset();
        } else {
      
        }
      });
  };
/////////////////add todo or post todo///////////////////

  return (
    <div>
      <h3 className="py-2 fw-bold">To Do List App </h3>
      <form className="w-full mx-auto" onSubmit={handleOnSubmit}  action="">
        <input type="py-1" name="input" />
        <button className="btn bg-dark  mx-2 text-white mb-1  border  mt-1 mt-lg-0 px-4" type="submit">
          Add todo
        </button>
      </form>
    </div>
  );
};

export default Addtodo;
