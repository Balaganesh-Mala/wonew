import { Component } from "react";
import Cookies from "js-cookie";
import { Redirect, Link } from "react-router-dom";

import { CiUser } from "react-icons/ci";
import { HiOutlineLockClosed } from "react-icons/hi2";

import "./index.css";

class Login extends Component {
  state = {
    username: "",
    password: "",
    showPassword: false,
    errorMessage: "",
    error: false,
  };

  onChangeUsername = (event) => {
    this.setState({ username: event.target.value });
  };

  onchangePassword = (event) => {
    this.setState({ password: event.target.value });
  };

  onClickShowPassword = () => {
    this.setState((prev) => ({ showPassword: !prev.showPassword }));
  };

  onSubmitSuccess = (jwtToken) => {
    const { history } = this.props;
    Cookies.set("jwt_token", jwtToken, {
      expires: 30,
      path: "/",
    });
    history.replace("/");
  };

  onSubmitFailure = (errorMgs) => {
    this.setState((prev) => ({ error: !prev.error, errorMessage: errorMgs }));
  };

  onsubmitForm = async (event) => {
    event.preventDefault();
    const { username, password } = this.state;
    const userDetails = { username, password };
    const url = "https://apis.ccbp.in/login";
    const options = {
      method: "POST",
      body: JSON.stringify(userDetails),
    };
    const response = await fetch(url, options);
    const data = await response.json();
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwtToken);
    } else {
      this.onSubmitFailure(data.error_msg);
    }
  };
  render() {
    const { username, password, showPassword, error, errorMessage } =
      this.state;
    const jwtToken = Cookies.get("jwt_token");
    if (jwtToken !== undefined) {
      return <Redirect to="/" />;
    }
    return (
      <div className="login-container">
        <div className="form-controls">
          <form onSubmit={this.onsubmitForm}>
            <div className="img-control"><img src="https://ik.imagekit.io/izqq5ffwt/IMG_20251004_004234.png?updatedAt=1759518799426" alt="website logo" className="website-logo"/></div>
            <div className="input-controls">
              <label htmlFor="username">Username</label>
              <div className="input-box">
                <CiUser className="password-icon" />
                <input
                  type="text"
                  placeholder="Username"
                  id="username"
                  value={username}
                  onChange={this.onChangeUsername}
                />
              </div>
            </div>
            <div className="input-controls">
              <label htmlFor="password">Password</label>
              <div className="input-box">
                <HiOutlineLockClosed className="password-icon" />
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  id="password"
                  value={password}
                  onChange={this.onchangePassword}
                />
              </div>
            </div>

            <div className="forget-pass">
              <div className="flex-row show-pass">
                <input
                  type="checkbox"
                  id="checkbox"
                  onChange={this.onClickShowPassword}
                />
                <label htmlFor="checkbox">Show password</label>
              </div>
              <Link to="/forgetPassword">
                <p>Forget password</p>
              </Link>
            </div>
            <button type="submit" className="login-btn">
              Login
            </button>
            <div className="sing-up-text flex-row">
              <p>Don't have an account?</p>
              <Link to="/registration">
                <span>Singup</span>
              </Link>
            </div>
            {error && <p className="error-msg">{errorMessage}</p>}
          </form>
        </div>
      </div>
    );
  }
}
export default Login;
