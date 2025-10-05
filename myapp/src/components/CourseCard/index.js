import { Link } from "react-router-dom";
import "./index.css";

const CourseCard = ({ couresDetails }) => {
  const { title, discription, imgUtl } = couresDetails;

  return (
    <Link to={`/video/${title.toLowerCase()}`} className="course-card-link">
      <div className="course-card">
        <img src={imgUtl} alt={title} className="course-img" />
        <div className="course-content">
          <h1>{title}</h1>
          <p>{discription}</p>
        </div>
      </div>
    </Link>
  );
};

export default CourseCard;
