import React, { Component } from "react";

import data from "../../../data/data.json";

export default class TheadRow extends Component {
  renderTheadCell = mentorId => {
    const students = data[mentorId].students;
    return students.map(({ studentGit }) => {
      return (
        <th className="thead-cell" key={studentGit}>
          {studentGit}
        </th>
      );
    });
  };

  render() {
    const { currentIdMentor } = this.props;
    const students = this.renderTheadCell(currentIdMentor);

    return (
      <tr className="thead-row">
        <th className="thead-cell">Task</th>
        {students}
      </tr>
    );
  }
}
