import React from "react";
import JobsCard from "./JobsCard";

const HotJob = ({ jobsData }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3">
      {jobsData.map((job) => (
        <JobsCard job={job} key={job._id}></JobsCard>
      ))}
    </div>
  );
};

export default HotJob;
