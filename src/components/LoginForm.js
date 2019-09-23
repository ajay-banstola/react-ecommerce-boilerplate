import React from "react";
import { Redirect } from "react-router-dom";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    let isLoggedIn = false;
    this.state = {
      email: "",
      password: "",
      isLoggedIn
    };
  }

  render() {
    if (this.state.isLoggedIn) {
      return <Redirect to="/list" />;
    }
    const { email, password } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          name="email"
          type="text"
          placeholder="Enter your email"
          value={email}
          onChange={this.handleChange}
        />
        <label htmlFor="email">Password</label>
        <input
          name="password"
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={this.handleChange}
        />
        <button type="submit">Login</button>
      </form>
    );
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { email, password } = this.state;
    //logic magic
    if (email === "A" && password === "B") {
      this.setState({
        isLoggedIn: true
      });
      console.log(this.state.isLoggedIn);
    }
  };
}

export default LoginForm;
