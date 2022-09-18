import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import TasksPage from "./components/TasksPage";
import { connect } from "react-redux";
import { edit_task, create_Task, delete_Task } from "./actions";

function App(props) {
  const onStatusChange = (id, status) => {
    props.dispatch(edit_task(id, { status }));
  };

  const onCreateTask = ({ title, description }) => {
    props.dispatch(create_Task({ title, description }));
  };

  const onDeleteTask = (id) => {
    props.dispatch(delete_Task(id));
  };

  return (
    <>
      <TasksPage
        tasks={props.tasks}
        onStatusChange={onStatusChange}
        onCreateTask={onCreateTask}
        onDeleteTask={onDeleteTask}
      />
    </>
  );
}

const mapStateToProp = (state) => {
  return {
    tasks: state.tasks,
  };
};

//testing

export default connect(mapStateToProp)(App);
