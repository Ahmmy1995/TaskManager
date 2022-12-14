import React from "react";
import Task from "./Task";

const TaskList = (props) => {
  return (
    <div>
      <div className="card card-header text-uppercase text-center font-bold">
        {props.status}
      </div>

      {props.tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onStatusChange={props.onStatusChange}
          onDeleteTask={props.onDeleteTask}
        />
      ))}
    </div>
  );
};

export default TaskList;
