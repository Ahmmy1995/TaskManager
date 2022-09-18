import { Edit_Task, Create_Task, Delete_Task } from "../actions/types";

const initialState = [
  // {
  //   id: 1,
  //   title: "Meet Facebook",
  //   description: "Login to meet us.",
  //   status: "Doing",
  // },
  // {
  //   id: 2,
  //   title: "Meet Instagram",
  //   description: "Let's take some pictures.",
  //   status: "To Do",
  // },
  // {
  //   id: 3,
  //   title: "Meet Twitter",
  //   description: "Let's tweet today!.",
  //   status: "Finished",
  // },
];

const tasks = (state = { tasks: initialState }, action) => {
  // if (action.type === Edit_Task) {
  //   const { payload } = action;
  //   return {
  //     tasks: state.tasks.map((task) => {
  //       if (task.id === payload.id) {
  //         return Object.assign({}, task, payload.params);
  //       }
  //       return task;
  //     }),
  //   };
  // }
  //****************************************************** */
  // Switch case from below

  const { payload } = action;
  switch (action.type) {
    case Edit_Task: {
      return {
        tasks: state.tasks.map((task) => {
          if (task.id === payload.id) {
            return Object.assign({}, task, payload.params);
          }
          return task;
        }),
      };
    }
    case Create_Task: {
      return {
        tasks: state.tasks.concat(action.payload),
      };
    }
    case Delete_Task: {
      return {
        tasks: state.tasks.filter((task) => task.id !== action.id),
      };
    }

    default:
      return state;
  }
};
export default tasks;
