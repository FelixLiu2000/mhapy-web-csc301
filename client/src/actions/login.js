
import { login } from "./user";

export const handleInput = (event, form) => {
  const target = event.target;
  form.setState({
    [target.name]: target.value,
  });
};

export const handleLogin = (event, form) => {
  event.preventDefault();
  const state = form.state;
  const app = form.props.app;
  const user = { email: state.email, password: state.password };
  login(user)
    .then((userData) => {
      // Set user
      app.setState({ currentUser: userData }, () => {
        form.setState({
          credentialError: false,
          errorText: "",
        });
      });
    })
    .catch((err) => {
      if (err && err.message === "credentials") {
        form.setState({
          credentialError: true,
          errorText: "Invalid username or password.",
        });
      } else {
        form.setState({ errorText: err.message });
      }
    });
};
