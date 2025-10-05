import CourseCard from "../CourseCard";
import "./index.css";

const CouresItem = ({ couresList }) => {
  return (
    <div className="coures-container">
      {couresList.map((eachCoures) => (
        <CourseCard key={eachCoures.id} couresDetails={eachCoures} />
      ))}
    </div>
  );
};

export default CouresItem;
