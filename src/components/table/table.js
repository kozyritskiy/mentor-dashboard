import React from "react";

import Thead from "../table/thead";
import Tbody from "../table/tbody";

const Dashboard = ({ currentIdMentor, mentors }) => {
  return (
    <div className="dashboard">
      <div className="mentor">
        <span>Mentor - </span>
        <span>{mentors[currentIdMentor].name}</span>
      </div>
      <table className="table">
        <Thead currentIdMentor={currentIdMentor} />
        <Tbody currentIdMentor={currentIdMentor} />
      </table>
    </div>
  );
};

export default Dashboard;
