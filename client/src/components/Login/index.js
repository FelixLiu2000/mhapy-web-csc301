import React from 'react';
import {Typography, Container} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import {handleInput, handleLogin} from '../../actions/login';
import Button from '@material-ui/core/Button';
import './styles.css';

class Login extends React.Component {
  state = {
    username: '',
    password: '',
    authError: false,
    errorText: '',
  }

  render() {
    const {
      username,
      password,
      authError,
      errorText,
    } = this.state;

    return (
      <Container maxWidth="xs" component="div">
        <Typography className="login__header" variant="h3" align="center">
          Login
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              name="username"
              variant="outlined"
              label="Username"
              value={username}
              onChange={(e) => handleInput(e, this)}
              error={authError}
              helperText={authError === true ? errorText : ''}
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
              helperText={authError === true ? errorText : ''}
              onChange={(e) => handleInput(e, this)}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              name="login"
              color="primary"
              variant="contained"
              onClick={(e) => handleLogin(e, this)}
              fullWidth
            >
              User Login
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Typography color="error" variant="subtitle2" align="center">
              {authError ? '' : errorText}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    );
  }
}

export default Login;
