import { Component } from "react";
import Cookies from "js-cookie";
import { Redirect, Link } from "react-router-dom";


import { CiUser } from "react-icons/ci";
import { HiOutlineLockClosed } from "react-icons/hi2";
import { MdOutlineEmail, MdOutlinePhone } from "react-icons/md";

import "./index.css";

class Registration extends Component {
  render() {
    const jwtToken = Cookies.get("jwt_token");
    if (jwtToken !== undefined) {
      return <Redirect to="/" />;
    }
    return (
      <div className="login-container">
        <div className="form-controls">
          <form>
            <div className="img-control">
              <img
                src="https://ik.imagekit.io/izqq5ffwt/IMG_20251004_004234.png?updatedAt=1759518799426"
                alt="website logo"
                className="website-logo"
              />
            </div>
            <div className="user-name-input-box">
              <div className="input-controls">
                <label htmlFor="firstname">Firstname</label>
                <div className="input-box">
                  <CiUser className="password-icon" />
                  <input type="text" placeholder="Firstname" id="firstname" />
                </div>
              </div>
              <div className="input-controls">
                <label htmlFor="lastname">Lastname</label>
                <div className="input-box">
                  <CiUser className="password-icon" />
                  <input type="text" placeholder="Lastname" id="lastname" />
                </div>
              </div>
            </div>
            <div className="input-controls">
              <label htmlFor="email">Email</label>
              <div className="input-box">
                <MdOutlineEmail className="password-icon" />
                <input type="text" placeholder="Email" id="email" />
              </div>
            </div>
            <div className="input-controls">
              <label htmlFor="phoneNumber">Phone Number</label>
              <div className="input-box">
                <MdOutlinePhone className="password-icon" />
                <input type="tel" placeholder="Phone Number" id="phoneNumber" />
              </div>
            </div>
            <div className="input-controls">
              <label htmlFor="password">Password</label>
              <div className="input-box">
                <HiOutlineLockClosed className="password-icon" />
                <input type="password" placeholder="Password" id="password" />
              </div>
            </div>
            <div className="input-controls">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <div className="input-box">
                <HiOutlineLockClosed className="password-icon" />
                <input
                  type="password"
                  placeholder="Confirm password"
                  id="confirmPassword"
                />
              </div>
            </div>
            <button type="button" className="login-btn">
              Singup
            </button>
            <div className="sing-up-text flex-row">
              <p>Already have an account?</p>
              <Link to="/login">
                <span>Login</span>
              </Link>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
export default Registration;
