import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "../../../hooks";

import ToDoListLayout from "../components/ToDoListLayout";
import {
  CREATE_TASK,
  DELETE_TASK,
  /*DISCARD_CHANGES,*/
  SAVE_EDITED_TASK,
  SET_EDIT_MODE,
} from "../actions";

const ToDoListContainer = () => {
  const dispatch = useDispatch();
  const { taskList } = useSelector((state) => state.toDoListPage);

  const [formData, handleTaskChange, handleReset] = useForm({ taskText: "" });

  const handleTaskCreate = useCallback(
    (event) => {
      event.preventDefault();

      if (formData.taskText.length > 0) {
        dispatch(CREATE_TASK({ text: formData.taskText }));
        handleReset();
      }
    },
    [dispatch, formData]
  );

  const handleEditModeOn = useCallback(
    (taskId) => {
      dispatch(SET_EDIT_MODE(taskId));
    },
    [dispatch]
  );

  const handleTaskRemove = useCallback(
    (taskId) => {
      dispatch(DELETE_TASK(taskId));
    },
    [dispatch]
  );

  const handleEditSave = useCallback(
    (updatedTask) => {
      dispatch(SAVE_EDITED_TASK(updatedTask));
    },
    [dispatch]
  );

  // const handleDiscardChanges = useCallback(
  //   (id) => {
  //     dispatch(DISCARD_CHANGES(id));
  //   },
  //   [dispatch]
  // );

  return (
    <ToDoListLayout
      createTaskForm={formData}
      handleTaskCreate={handleTaskCreate}
      handleChange={handleTaskChange}
      handleEditModeOn={handleEditModeOn}
      taskList={taskList}
      handleTaskRemove={handleTaskRemove}
      handleEditSave={handleEditSave}
      // handleDiscardChanges={handleDiscardChanges}
    />
  );
};

export default ToDoListContainer;
