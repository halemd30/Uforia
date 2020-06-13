import React from "react";
import "./SignUp.scss";
import { Link } from "react-router-dom";

class SignUp extends React.Component {
  render() {
    return (
      <main className="signUpMain">
        <div className="signUpContainer">
          <h2>Sign up</h2>

          <div className="userName">
            <label htmlFor="signUpUserName">User name</label>
            <input name="userName" id="signUpUserName"></input>
          </div>

          <div className="email">
            <label htmlFor="signUpEmail">Email</label>
            <input name="email" id="signUpEmail"></input>
          </div>

          <div className="password">
            <label htmlFor="signUpPassword">Password</label>
            <input name="password" id="signUpPassword"></input>
          </div>

          <Link className="link" to="/taskList">
            Submit
          </Link>
        </div>
      </main>
    );
  }
}

export default SignUp;
