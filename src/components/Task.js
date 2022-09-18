import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

const Task_Statuses = ["To Do", "Doing", "Finished"];

const Task = (props) => {
  function onStatusChange(e) {
    props.onStatusChange(props.task.id, e.target.value);
  }

  function onDeleteTask() {
    props.onDeleteTask(props.task.id);
  }

  return (
    <>
      <form onChange={onStatusChange}>
        <select defaultValue={props.task.status}>
          {Task_Statuses.map((status) => (
            <option value={status} key={status}>
              {status}
            </option>
          ))}
        </select>
      </form>
      <h2 className="card-title mt-3 text-uppercase px-2 bg-gradient-to-r from-indigo-500 text-black  ">
        {props.task.title}
      </h2>
      <p className="card-text mb-3 text-muted text-uppercase font-bold px-2">
        {props.task.description}
      </p>
      <FontAwesomeIcon
        className="float-right m-2 p-2 cursor-pointer"
        icon={faTrashCan}
        color={"red"}
        onClick={() => onDeleteTask(props.task.id)}
      />
    </>
  );
};

export default Task;
