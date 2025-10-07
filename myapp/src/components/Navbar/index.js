import { Link, withRouter } from "react-router-dom";
import Cookies from "js-cookie";

import { HiOutlineHome } from "react-icons/hi2";
import { AiOutlineLogout } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";

import "./index.css";

const Navbar = (props) => {
  const onClickLogout = () => {
    const { history } = props;
    Cookies.remove("jwt_token");
    history.replace("/login");
  };

  return (
    <nav className="navbar">
      <div className="nav-controls">
        <Link to="/">
          <img
            src="https://ik.imagekit.io/izqq5ffwt/IMG_20251004_004234.png?updatedAt=1759518799426"
            alt="website logo"
            className="website-logo"
          />
        </Link>
        <div className="search-input">
          <CiSearch className="search-icon" />
          <input
            type="search"
            placeholder="Search courses"
            className="search-box"
          />
        </div>
        <ul className="list-container">
          <li className="list-items">
            <Link to="/" className="nav-links">
              Home
            </Link>
          </li>
          <li className="list-items">
            <Link to="/" className="nav-links">
              Courses
            </Link>
          </li>
          <li className="list-items">
            <Link to="/support" className="nav-links">
              Support
            </Link>
          </li>
          <li className="list-items">
            <Link to="/jobs" className="nav-links">
              Jobs
            </Link>
          </li>
          <button type="button" className="logout-btn" onClick={onClickLogout}>
            Logout
          </button>
        </ul>
        <div className="mobile-view ">
          <ul className="list-icons ">
            <li className="list-items">
              <Link to="/" className="link-navbar">
                <HiOutlineHome />
              </Link>
            </li>
            <li className="list-items">
              <AiOutlineLogout
                onClick={onClickLogout}
                className="logout-icons"
              />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default withRouter(Navbar);
