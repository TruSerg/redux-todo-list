import { Box } from "@mui/material";

import Header from "../Header";

const MainLayout = ({ children }) => {
  return (
    <Box>
      <Header />
      <Box>{children}</Box>
    </Box>
  );
};

export default MainLayout;
