import React, { useCallback, useState } from "react";
import PropTypes from "prop-types";

import { Box, IconButton } from "@mui/material";
import {
  CheckCircle as CheckCircleIcon,
  Cancel as Cancel,
} from "@mui/icons-material";
import { withStyles } from "@mui/styles";

import styles from "./styles";

const EditableToDo = ({
  classes,
  initialText,
  id,
  handleSave /* handleUndo */,
}) => {
  const [editableValue, setEditableValue] = useState(initialText);

  const handleEdit = useCallback((event) => {
    const { value } = event.target;
    setEditableValue(value);
  }, []);

  const handleUndo = useCallback(() => {
    setEditableValue(initialText);
  }, [initialText]);

  const handleTaskSave = useCallback(() => {
    if (editableValue.length > 0) {
      handleSave({ id, newText: editableValue });
    }
  }, [id, editableValue]);
  return (
    <Box className={classes.wrapper}>
      <input
        className={classes.input}
        type="text"
        value={editableValue}
        onChange={handleEdit}
      />
      <Box>
        <IconButton color="success" onClick={handleTaskSave}>
          <CheckCircleIcon />
        </IconButton>
        <IconButton color="error" onClick={() => handleUndo(id)}>
          <Cancel />
        </IconButton>
      </Box>
    </Box>
  );
};

EditableToDo.propTypes = {
  initialText: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  handleSave: PropTypes.func.isRequired,
};

export default withStyles(styles)(EditableToDo);
