import React from "react";
import "./SignUpPage.scss";
import Context from "../../Context";

class SignUpPage extends React.Component {
  static contextType = Context;

  state = { error: null };

  handleRegistrationSuccess = (user) => {
    const { history } = this.props;
    history.push("/login");
  };

  handleSubmit = (ev) => {
    ev.preventDefault();
    const { username, password, phone_number } = ev.target;

    this.setState({ error: null });
    this.context
      .postUser({
        username: username.value,
        password: password.value,
        phone_number: phone_number.value,
      })
      .then((user) => {
        username.value = "";
        password.value = "";
        phone_number.value = "";
        this.handleRegistrationSuccess();
      })
      .catch((res) => {
        this.setState({ error: res.error });
      });
  };

  render() {
    return (
      <main className="signUpMain loginMain">
        <form className="signUpForm" onSubmit={this.handleSubmit}>
          <h2>Sign up</h2>

          <div className="username">
            <label htmlFor="username">Username:</label>
            <input name="username" type="text" id="username" />
          </div>

          <div className="password">
            <label htmlFor="password">Password:</label>
            <input name="password" type="text" id="password" />
          </div>

          <div className="phone">
            <label htmlFor="phone_number">Phone number:</label>
            <input
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              name="phone"
              type="tel"
              id="phone_number"
            />
          </div>

          <button type="submit">Submit</button>
        </form>
      </main>
    );
  }
}

export default SignUpPage;
