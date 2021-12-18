import PropTypes from "prop-types";

import { Box, Container, IconButton } from "@mui/material";
import { withStyles } from "@mui/styles";
import AddCircleOutlineSharpIcon from "@mui/icons-material/AddCircleOutlineSharp";

import TodoItem from "../ToDoItem";
import EditableToDo from "../EditableToDo";

import styles from "./styles";

const ToDoListLayout = ({
  createTaskForm,
  handleChange,
  handleTaskCreate,
  handleEditModeOn,
  handleTaskRemove,
  handleEditSave,
  // handleDiscardChanges,
  taskList,
  classes,
}) => {
  return (
    <Box className={classes.todoListWrapper}>
      <Container>
        <Box className={classes.todoListArea}>
          <Box className={classes.form}>
            <form onSubmit={handleTaskCreate}>
              <input
                className={classes.input}
                value={createTaskForm.taskText}
                type="text"
                name="taskText"
                onChange={handleChange}
              />
              <IconButton color="success" type="submit">
                <AddCircleOutlineSharpIcon />
              </IconButton>
            </form>
          </Box>
          <Box>
            {taskList.map((task, index) => {
              return task.isEditMode ? (
                <EditableToDo
                  key={task.id}
                  id={task.id}
                  initialText={task.text}
                  handleSave={handleEditSave}
                  // handleUndo={handleDiscardChanges}
                />
              ) : (
                <TodoItem
                  handleEdit={() => handleEditModeOn(task.id)}
                  handleDelete={() => handleTaskRemove(task.id)}
                  key={task.id}
                  text={task.text}
                  orderNumber={index + 1}
                />
              );
            })}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

ToDoListLayout.propTypes = {
  createTaskForm: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleTaskCreate: PropTypes.func.isRequired,
  handleEditModeOn: PropTypes.func.isRequired,
  handleTaskRemove: PropTypes.func.isRequired,
  handleEditSave: PropTypes.func.isRequired,
  taskList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      isEditMode: PropTypes.bool.isRequired,
    })
  ),
};

export default withStyles(styles)(ToDoListLayout);
