import { Edit_Task, Delete_Task, Create_Task } from "./types";

import uuid from "react-uuid";

export const edit_task = (id, params = {}) => {
  return {
    type: Edit_Task,
    payload: {
      id,
      params,
    },
  };
};

export const create_Task = ({ title, description }) => {
  return {
    type: Create_Task,
    payload: {
      id: uuid(),
      title,
      description,
      status: "To Do",
    },
  };
};

export const delete_Task = (id) => {
  return {
    type: Delete_Task,
    id,
  };
};
