import "./index.css";

const JobItemDetails = ({ jobDetails }) => {
  const {
    id,
    imgUrl,
    companyName,
    jobRole,
    workLocation,
    ctc,
    openings,
    applyBy,
    link,
  } = jobDetails;

  return (
    <div className="job-card">
      <div className="id-container">
        <p>{id.slice(0, 18)}</p>
        <img src={imgUrl} alt={companyName} className="job-logo" />
      </div>
      <p className="company-name">{companyName}</p>
      <h3 className="job-role">
        <strong>Role:</strong> {jobRole}
      </h3>
      <p>
        <strong>Location:</strong> {workLocation}
      </p>
      <p>
        <strong>CTC:</strong> {ctc}
      </p>
      <p>
        <strong>Openings:</strong> {openings}
      </p>
      <p>
        <strong>Apply by:</strong> {applyBy}
      </p>
      <hr />
      <div className="button">
        <a href={link} target="_blank" rel="noopener noreferrer">
          <button type="button">View Details</button>
        </a>
      </div>
    </div>
  );
};

export default JobItemDetails;
