import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import TokenService from "../../token-service";

class Nav extends React.Component {
  handleLogoutClick = () => {
    TokenService.clearAuthToken();
    this.props.history.push("/");
  };

  renderLogoutLink() {
    return (
      <>
        <Link className="logout" onClick={this.handleLogoutClick} to="/">
          <li>Logout</li>
        </Link>
      </>
    );
  }

  renderLoginLink() {
    return (
      <>
        <Link className="signUp" to="/signUp">
          <li>Sign up</li>
        </Link>
        <Link className="login" to="/login">
          <li>login</li>
        </Link>
      </>
    );
  }

  render() {
    return (
      <nav className="headerMain">
        <ul>
          <Link className="logo" to="/">
            <li>Uforia</li>
          </Link>
          {TokenService.hasAuthToken()
            ? this.renderLogoutLink()
            : this.renderLoginLink()}
        </ul>
      </nav>
    );
  }
}

export default Nav;
