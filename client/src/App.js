import "./App.css";
import React from "react";
// Import react router
import { Route, Switch, BrowserRouter } from "react-router-dom";
// Import components
import ChatShell from "./components/Chat";
import Login from "./components/Login";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Home from "./components/Home";
import { checkSession, getUser } from "./actions/user";
import { Box, Typography } from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";
import deepPurple from "@material-ui/core/colors/deepPurple";
import purple from "@material-ui/core/colors/purple";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: deepPurple[500]
    },
    secondary: {
      main: purple["A400"]
    }
  }
});

class App extends React.Component {
  state = {
    currentUser: null,
    loggedIn: true
  };
  componentDidMount() {
    this.componentDidUpdate();
  }
  componentDidUpdate(_, __, ___) {
    // User object missing, check if still logged in
    if (!this.state.currentUser && this.state.loggedIn)
    checkSession()
      .then((userID) => {
        // Request current user data
        getUser(userID)
          .then((userData) => {
            // Reassign user object
            this.setState({ currentUser: userData });
          })
          .catch(() => {
            // Force user to re-login
            this.setState({
              loggedIn: false
            });
          });
      })
      .catch(() => {
        // Force user to re-login
        this.setState({
          loggedIn: false
        });
      });
  }

  unauthenticated() {
    return (
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Switch>
            <Route
              exact
              path={["/", "/chat"]}
              render={(props) => <Login {...props} app={this}/>}
            />
            {/* Default path*/}
            <Route render={() => <h1>404 Not Found</h1>}/>
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    );
  }

  loadingPage() {
    return (
      <ThemeProvider theme={theme}>
        <Box display={"flex"} justifyContent={"center"} minHeight={"100vh"}>
          <CircularProgress color={"primary"} size={100}/>
        </Box>
      </ThemeProvider>
    )
  }

  render() {
    const authenticated = this.state.loggedIn && this.state.currentUser;
    if (!authenticated) {
      if (this.state.loggedIn) {
        // Render loading page while attempting to reassign user object
        return this.loadingPage();
      } else {
        // Render login page
        return this.unauthenticated();
      }
    } else {
      return (
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <Switch>
              <Route
                exact
                path={["/chat"]}
                render={(props) => <ChatShell {...props} app={this}/>}
              />
              <Route
                exact
                path={["/"]}
                render={(props) => <Home {...props} app={this}/>}
              />
              {/* Default path*/}
              <Route render={() => <h1>404 Not Found</h1>}/>
            </Switch>
          </BrowserRouter>
        </ThemeProvider>
      );
    }
  }
}

export default App;
