import React, { useState } from "react";
import TaskList from "./TaskList";

const Task_Statuses = ["To Do", "Doing", "Finished"];

const TasksPage = (props) => {
  // Hooks
  const [form, showForm] = useState(true);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  // To open and close the title form
  const formOpen = () => {
    showForm(!form);
  };

  // To change the title
  const changeTitle = (e) => {
    setTitle(e.target.value);
  };

  // To change the description
  const changeDescription = (e) => {
    setDescription(e.target.value);
  };

  // Creating a new task function
  const onCreateTask = (e) => {
    e.preventDefault();
    props.onCreateTask({
      title,
      description,
    });
    resetForm();
  };

  // resetting form after submit
  const resetForm = () => {
    setTitle("");
    setDescription("");
    showForm(false);
  };

  const renderTaskList = (props) => {
    const { tasks } = props;
    return Task_Statuses.map((status, id) => {
      const statusTask = tasks.filter((task) => task.status === status);
      return (
        <div className="col-md-3 card m-2 p-0 " key={id}>
          <TaskList
            key={status}
            status={status}
            tasks={statusTask}
            onStatusChange={props.onStatusChange}
            onDeleteTask={props.onDeleteTask}
          />
        </div>
      );
    });
  };

  return (
    <div className="container my-5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div className="jumbotron py-3">
        <div className="row">
          <div className="col-md-2">
            <button
              onClick={formOpen}
              className="bg-red-600  hover:bg-blue-400 text-white font-bold py-2 px-3 border-b-4 border-blue-700 hover:border-blue-500"
            >
              open
            </button>
          </div>

          <div className="col-md-10">
            <h2 className="display-4 text-center text-uppercase">
              DayBreak Hotels
            </h2>
          </div>
        </div>

        {/* Input Form from here */}
        {form && (
          <form onSubmit={onCreateTask}>
            <div className="form-group">
              <input
                onChange={changeTitle}
                type="text"
                className="form-control my-2"
                placeholder="Task Title"
              />
            </div>

            <div className="form-group">
              <textarea
                onChange={changeDescription}
                type="text"
                className="form-control my-2"
                placeholder="Description"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button type="submit" className="bg-blue-500 rounded p-2 m-2">
              Feed In
            </button>
          </form>
        )}
      </div>
      <div className="flex flex-row p-2 m-2 justify-center relative bg-gray-100">
        {renderTaskList(props)}
      </div>
    </div>
  );
};

export default TasksPage;
