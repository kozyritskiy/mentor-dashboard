import React from "react";

import TheadRow from "../thead-row";

const Thead = ({ currentIdMentor }) => {
  return (
    <thead className="thead">
      <TheadRow currentIdMentor={currentIdMentor} />
    </thead>
  );
};

export default Thead;
