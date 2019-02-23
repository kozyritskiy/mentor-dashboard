import React, { Component } from "react";

import "./tbody.css";
import data from "../../../data/data.json";

export default class Tbody extends Component {
    
  renderTaskName = mentorId => {
    const students = data[mentorId].students;
    const taskNameArray = Object.keys(students[0].tasks);

    const taskNames = taskNameArray.map(task => {
      return [
        <td className="tbody-cell" key={task}>
          {task}
        </td>
      ];
    });

    let id = 50;

    for (let i = 0; i < students.length; i += 1) {
      const taskArray = Object.entries(students[i].tasks);
      for (let j = 0; j < taskArray.length; j += 1) {
        id += 1;
        const { status } = taskArray[j][1];
        let classNames = "tbody-cell";
        if (status === "Checked") {
          classNames += " checked";
        }
        if (status === "ToDo") {
          classNames += " todo";
        }
        if (status === "In Progress") {
          classNames += " in-progress";
        }
        if (status === "Checking") {
          classNames += " checking";
        }
        taskNames[j].push(<td className={classNames} key={id} />);
      }
    }

    for (let i = 0; i < taskNames.length; i += 1) {
      let countCheckedTask = 0;
      for (let j = 0; j < taskNames[i].length; j += 1) {
        const {
          props: { className }
        } = taskNames[i][j];
        const statusTask = "checked";
        if (className.indexOf(statusTask) !== -1) {
          countCheckedTask += 1;
          if (countCheckedTask === taskNames[i].length - 1) {
            const {
              props: { children }
            } = taskNames[i][0];
            taskNames[i][0] = (
              <td className="tbody-cell checked" key={children}>
                {children}
              </td>
            );
          }
        }
      }
    }

    return taskNames.map(name => {
      const {
        props: { children }
      } = name[0];
      return (
        <tr className="tbody-row" key={`${children}key`}>
          {name}
        </tr>
      );
    });
  };

  render() {
    const { currentIdMentor } = this.props;
    const students = this.renderTaskName(currentIdMentor);

    return <tbody className="tbody">{students}</tbody>;
  }
}
