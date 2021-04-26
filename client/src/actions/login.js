import { login } from "./user";

export const handleInput = (event, comp) => {
  const target = event.target;
  comp.setState({
    [target.name]: target.value,
  });
};

export const handleLogin = (event, comp) => {
  event.preventDefault();
  const state = comp.state;
  const app = comp.props.app;
  const user = { email: state.email, password: state.password };
  login(user)
    .then((userData) => {
      // Set user
      app.setState({ currentUser: userData }, () => {
        comp.setState({
          credentialError: false,
          errorText: "",
        });
      });
    })
    .catch((err) => {
      if (err && err.message === "credentials") {
        comp.setState({
          credentialError: true,
          errorText: "Invalid username or password.",
        });
      } else {
        comp.setState({ errorText: err.message });
      }
    });
};
