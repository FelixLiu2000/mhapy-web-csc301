import React from "react";
import { Typography, Container } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { handleInput, handleLogin } from "../../actions/login";
import Button from "@material-ui/core/Button";
import "./styles.css";
import mhapyLogo from "../../assets/MHAPY-no-words.png";
import Box from "@material-ui/core/Box";

class Login extends React.Component {
  state = {
    email: "",
    password: "",
    authError: false,
    errorText: "",
  };

  render() {
    const { email, password, authError, errorText } = this.state;

    return (
      <Container maxWidth="xs" component="div">
        <Box className="logo" justifyContent="center">
          <img className="logo__img" src={mhapyLogo} alt="MHAPy" />
        </Box>
        <Typography className="login__header" variant="h3" align="center">
          Welcome!
        </Typography>
        <form onSubmit={(e) => handleLogin(e, this)} method="POST">
          <Grid alignItems="center" container spacing={2}>
            <Grid item xs={12}>
              <TextField
                name="email"
                variant="outlined"
                label="Email"
                value={email}
                onChange={(e) => handleInput(e, this)}
                error={authError}
                helperText={authError === true ? errorText : ""}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="password"
                variant="outlined"
                label="Password"
                type="password"
                value={password}
                error={authError}
                helperText={authError === true ? errorText : ""}
                onChange={(e) => handleInput(e, this)}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                name="login"
                color="primary"
                variant="contained"
                type="submit"
                fullWidth
              >
                Login
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Typography color="error" variant="subtitle2" align="center">
                {authError ? "" : errorText}
              </Typography>
            </Grid>
          </Grid>
        </form>
      </Container>
    );
  }
}

export default Login;
