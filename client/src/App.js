import './App.css';
import React from 'react';
// Import react router
import {Route, Switch, BrowserRouter} from 'react-router-dom';
// Import components
import Chat from './components/Chat';
import Login from './components/Login';

class App extends React.Component {
  state = {
    currentUser: null,
  };

  unauthenticated() {
    return (
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path={['/', '/chat']}
            render={(props) => <Login {...props} app={this} />}
          />
          {/* Default path*/}
          <Route render={() => <h1>404 Not Found</h1>} />
        </Switch>
      </BrowserRouter>
    );
  }

  render() {
    const authenticated = !!this.state.currentUser;
    // Redirect to login page
    if (!authenticated) {
      return this.unauthenticated();
    } else {
      return (
        <BrowserRouter>
          <Switch>
            <Route exact path="/chat" component={Chat} />
            {/* Default path*/}
            <Route render={() => <h1>404 Not Found</h1>} />
          </Switch>
        </BrowserRouter>
      );
    }
  }
}

export default App;
