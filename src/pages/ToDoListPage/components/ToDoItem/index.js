import PropTypes from "prop-types";
import { Box, IconButton } from "@mui/material";
import {
  DeleteForever as DeleteForeverIcon,
  Edit as EditIcon,
} from "@mui/icons-material";
import { withStyles } from "@mui/styles";

import styles from "./styles";

const TodoItem = ({ classes, orderNumber, text, handleEdit, handleDelete }) => {
  return (
    <Box className={classes.wrapper}>
      <Box className={classes.taskWrapper}>{`${orderNumber}. ${text}`}</Box>
      <Box>
        <IconButton color="success" onClick={handleEdit}>
          <EditIcon />
        </IconButton>
        <IconButton color="error" onClick={handleDelete}>
          <DeleteForeverIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

TodoItem.propTypes = {
  orderNumber: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  handleEdit: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default withStyles(styles)(TodoItem);
