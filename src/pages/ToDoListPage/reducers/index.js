import { handleActions } from "redux-actions";
import { v4 as uuidV4 } from "uuid";

import * as actions from "../actions";

const defaultState = {
  taskList: [],
};

const toDoListPageReducer = handleActions(
  {
    [actions.CREATE_TASK]: (state, { payload }) => {
      const { text } = payload;
      const newTask = {
        id: uuidV4(),
        text: text,
        isEditMode: false,
      };
      return {
        taskList: [newTask, ...state.taskList],
      };
    },
    [actions.SET_EDIT_MODE]: (state, { payload: taskId }) => {
      const updatedState = state.taskList.map((task) => ({
        ...task,
        isEditMode: taskId === task.id ? true : task.isEditMode,
      }));
      return {
        taskList: updatedState,
      };
    },
    [actions.DELETE_TASK]: (state, { payload: taskId }) => {
      const taskListCopy = [...state.taskList];
      console.log(taskListCopy);
      const itemIndexToRemove = taskListCopy.findIndex(
        (task) => task.id === taskId
      );
      taskListCopy.splice(itemIndexToRemove, 1);
      return {
        taskList: taskListCopy,
      };
    },
    [actions.SAVE_EDITED_TASK]: (state, { payload }) => {
      const { id, newText } = payload;

      const updatedState = state.taskList.map((task) => {
        const isTaskToUpdate = task.id === id;

        return {
          ...task,
          text: isTaskToUpdate ? newText : task.text,
          isEditMode: isTaskToUpdate ? false : task.isEditMode,
        };
      });
      return {
        taskList: updatedState,
      };
    },
    // [actions.DISCARD_CHANGES]: (state, { payload: taskId }) => {
    //   const updatedState = state.taskList.map((task) => ({
    //     ...task,
    //     isEditMode: task.id === taskId ? false : task.isEditMode,
    //   }));
    //   return {
    //     taskList: updatedState,
    //   };
    // },
  },
  defaultState
);
export default toDoListPageReducer;
