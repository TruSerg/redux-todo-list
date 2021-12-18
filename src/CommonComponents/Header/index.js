import { Box, Typography } from "@mui/material";
import { withStyles } from "@mui/styles";

import styles from "./styles";

const Header = ({ classes }) => {
  return (
    <Box className={classes.header}>
      <Typography className={classes.headerTitle} variant="h5">
        Redux To Do List
      </Typography>
    </Box>
  );
};

export default withStyles(styles)(Header);
