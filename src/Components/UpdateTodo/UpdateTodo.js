/** @format */

import React from "react";
import './Updatetodo.css'
const UpdateTodo = ({ updatedData, setUpdate }) => {




  /////////////////////////////update todo ////////////////////
  const handleUpdate = (e) => {
    e.preventDefault();
    const todos = { todo: e.target.input.value };
    const url = `https://hidden-anchorage-98570.herokuapp.com/updatetodo/${updatedData}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(todos)
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);

        e.target.reset();
        setUpdate(false);
      });
  };
  /////////////////////////////update todo ////////////////////



  return (
    <div className="py-3">
      <form className="w-full mx-auto" onSubmit={handleUpdate} action="">
        <input type="text" className="todoInput" name="input" />
        <button className="btn  border  mt-1 mt-lg-0 bg-success mx-2 text-white mb-1 " type="submit">
          Update todo
        </button>
      </form>
    </div>
  );
};

export default UpdateTodo;
