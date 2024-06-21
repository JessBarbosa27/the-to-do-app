import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

export const Task = ({ task, toggleComplete, deleteToDo, editToDo }) => {
  return (
    <div className="Task">
      <div></div>
      <p className={`${task.completed ? "completed" : ""}`}>{task?.task}</p>
      <div>
        <FontAwesomeIcon
          icon={faCheck}
          onClick={() => toggleComplete(task?.id)}
        />
        <FontAwesomeIcon icon={faPenToSquare} onClick={()=> editToDo(task)} />
        <FontAwesomeIcon icon={faTrash} onClick={() => deleteToDo(task)} />
      </div>
    </div>
  );
};
