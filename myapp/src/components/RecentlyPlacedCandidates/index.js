import "./index.css";

const RecentlyPlacedCandidates = (props) => {
  const { recentlyPlacedCandidatesDetails } = props;
  const { imageUrl, name, brantch, role, companyUrl, feedback } =
    recentlyPlacedCandidatesDetails;
  return (
    <div className="user-feedback-container">
      <img src={imageUrl} alt={name} className="user-pic" />
      <div className="user-content">
        <h3 className="student-name">{name}</h3>
        <div className="student-designation">
          <img src={companyUrl} alt={role} className="compant-logo" />
          <div>
            <p><b>{role} | {brantch}</b></p>
          </div>
        </div>
        <p>{feedback}</p>
      </div>
    </div>
  );
};
export default RecentlyPlacedCandidates;
