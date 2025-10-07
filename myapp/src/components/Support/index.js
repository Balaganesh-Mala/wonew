import Navbar from "../Navbar";
import { CiUser } from "react-icons/ci";
import { MdOutlineEmail, MdOutlinePhone } from "react-icons/md";

import "./index.css";

const Support = () => {
  const onsubmitForm = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <Navbar />
      <div>
        <div className="support-container">
          <div className="support-form-cantainer">
            <div className="support-banner">
              <img
                src="https://ik.imagekit.io/izqq5ffwt/Black%20and%20Dark%20Red%20Modern%20Minimalist%20Final%20Project%20Docs%20Banner%20(3).png?updatedAt=1759858318467"
                alt="website logo"
                className="support-banner"
              />
            </div>
            <form onSubmit={onsubmitForm} className="support-form-controls">
              <div className="input-controls">
                <label htmlFor="username">Username</label>
                <div className="input-box">
                  <CiUser className="password-icon" />
                  <input type="text" placeholder="Username" id="username" />
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
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    id="phoneNumber"
                  />
                </div>
              </div>
              <select className="input-controls selet-box cursor-pointer">
                <option>Placement</option>
                <option selected>General</option>
              </select>
              <textarea
                rows={5}
                placeholder="Write your query"
                className="input-controls selet-box"
              ></textarea>
              <button type="submit" className="login-btn">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Support;
