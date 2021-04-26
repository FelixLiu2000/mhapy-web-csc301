import "./App.css";
import React from "react";
// Import react router
import { Route, Switch, BrowserRouter } from "react-router-dom";
// Import components
import ChatShell from "./components/Chat";
import Login from "./components/Login";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Home from "./components/Home";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#388e3c",
      light: "#6abf69",
      dark: "#00600f",
    },
    secondary: {
      main: "#c8e6c9",
      light: "#fbfffc",
      dark: "#97b498",
    },
  },
});

class App extends React.Component {
  state = {
    currentUser: null,
  };

  unauthenticated() {
    return (
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Switch>
            <Route
              exact
              path={["/", "/chat"]}
              render={(props) => <Login {...props} app={this} />}
            />
            {/* Default path*/}
            <Route render={() => <h1>404 Not Found</h1>} />
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    );
  }

  render() {
    const authenticated = !!this.state.currentUser;
    // Redirect to login page
    if (!authenticated) {
      return this.unauthenticated();
    } else {
      return (
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <Switch>
              <Route
                exact
                path={["/chat"]}
                render={(props) => <ChatShell {...props} app={this} />}
              />
              <Route
                exact
                path={["/"]}
                render={(props) => <Home {...props} app={this} />}
              />
              {/* Default path*/}
              <Route render={() => <h1>404 Not Found</h1>} />
            </Switch>
          </BrowserRouter>
        </ThemeProvider>
      );
    }
  }
}

export default App;
