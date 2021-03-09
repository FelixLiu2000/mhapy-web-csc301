export const handleInput = (event, form) => {
  const target = event.target;
  form.setState({
    [target.name]: target.value,
  });
};

export const handleLogin = (event, form) => {
  // const state = form.state;
  // const app = form.props.app;
  // TODO: Backend login call
};
