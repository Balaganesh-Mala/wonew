import jobsData from "../../data/JobsData";
import JobItemDetails from "../JobItemDetails";
import Navbar from "../Navbar";

import "./index.css";

const Jobs = () => {
  return (
    <>
    <Navbar/>
    <div className="job-list-container">
      <h1 className="job-heading">Jobs</h1>
      <hr/>
      <div className="job-container">
        {jobsData.map((eachJob) => (
          <JobItemDetails key={eachJob.id} jobDetails={eachJob} />
        ))}
      </div>
    </div>
    </>
  );
};

export default Jobs;
