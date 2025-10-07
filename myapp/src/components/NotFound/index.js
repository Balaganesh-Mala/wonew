import { Link } from "react-router-dom";
import "./index.css";

const NotFound = () => (
  <div className="not-found-container">
    <div className="not-found-card">
      <img
        src="https://ik.imagekit.io/izqq5ffwt/Gemini_Generated_Image_8ayl5j8ayl5j8ayl-removebg-preview.png"
        alt="Not Found"
        className="not-found-img"
      />
      <h1>Page Not Found</h1>
      <p>
        We're sorry, the page you requested could not be found please go back to
        the homepage
      </p>
      <Link to="/">
        <button type="butoon">GO BACK</button>
      </Link>
    </div>
  </div>
);
export default NotFound;
