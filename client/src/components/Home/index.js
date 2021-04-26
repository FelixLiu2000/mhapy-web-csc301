import React from "react";
import { Box, Typography } from "@material-ui/core";

class Home extends React.Component {
  render() {
    return (
      <Box display={"flex"} justifyContent={"center"}>
        <Typography variant={"h1"} color={"primary"}>
          Home
        </Typography>
      </Box>
    );
  }
}

export default Home;
