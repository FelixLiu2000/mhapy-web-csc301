import React from "react";
import { Box, Typography, Button } from "@material-ui/core";
import { Link } from "react-router-dom";

class Home extends React.Component {
  render() {
    return (
      <Box display={"block"} justifyContent={"center"} textAlign={"center"}>
        <Typography variant={"h1"} color={"primary"}>
          Home
        </Typography>
        <Button
          variant={"contained"}
          color={"primary"}
          component={Link}
          to={"/chat"}
        >
          Go to Chat
        </Button>
      </Box>
    );
  }
}

export default Home;
