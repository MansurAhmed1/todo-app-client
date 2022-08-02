/** @format */

import React  from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "react-toastify/dist/ReactToastify.css";
import {
  faCircleCheck,
  faPen,
  faTrashCan
} from "@fortawesome/free-solid-svg-icons";

const Todo = ({ todo, index, updateData, setUpdate }) => {
  const { toDo, _id ,taskDone} = todo;
  

  /////////////////////////delete todo////////////////////////
  const handleDelete = (id) => {
    const procced = window.confirm("Are You sure Want to delete this todo?");
    if (procced) {
      const url = `https://hidden-anchorage-98570.herokuapp.com/deletetodo/${id}`;
      fetch(url, {
        method: "DELETE"
      })
        .then((res) => res.json())
        .then((data) => {
          // toast("todo delete succesfully");
        });
    }
  };
  /////////////////////////delete todo////////////////////////

  //////////////////////////////taskdone///////////////////////
  const handleTodoDone = (id) => {
    const takDone = { taskDone: true };
    const url = `https://hidden-anchorage-98570.herokuapp.com/taskdone/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(takDone)
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
  };
/////////////////////////////taskdone////////////////////////


  return (
    <div className="bg-dark text-white todoList mx-auto mt-2 d-flex flex-row ">
      <div className="numberOfTodo">{index + 1}.</div>
      <div className="todo">{toDo} </div>
      <div
        className="compelete"
        onClick={() => {
        
          handleTodoDone(_id)
        }}
      >
        <FontAwesomeIcon className={` ${taskDone?'text-success':'text-white'}`} icon={faCircleCheck} />{" "}
      </div>

      {!taskDone ? 
        <div
          className="update"
          
        >
          {" "}

          <FontAwesomeIcon icon={faPen}   onClick={() => {
            setUpdate(true);
            updateData(_id);
          }} />{" "}

          
        </div> :<div className="">done</div>
      }

      <div
        className="delete"
        onClick={() => {
          handleDelete(_id);
        }}
      >
        {" "}
        <FontAwesomeIcon className="text-white" icon={faTrashCan} />
      </div>
    </div>
  );
};

export default Todo;
