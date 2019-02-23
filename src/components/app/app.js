import React, { Component } from "react";

import { isNull } from "util";
import "./app.css";
import Dashboard from "../table";
import mentors from '../helpers'
import Input from "../input";


export default class App extends Component {
  state = {
    currentIdMentor: null
  };

  changeMentorId = idx => {
    this.setState({
      currentIdMentor: idx
    });
  };

  render() {
    const { currentIdMentor } = this.state;

    const NoSelect = () => <div>No mentor has been selected</div>;
    const NoMentor = () => <div>Mentor was not found</div>;

    const dashboard = isNull(currentIdMentor) ? (
      <NoSelect />
    ) : currentIdMentor === -1 ? (
      <NoMentor />
    ) : (
      <Dashboard currentIdMentor={currentIdMentor} mentors={mentors} />
    );

    return (
      <div className="dashboard-app">
        <Input onChangeMentorId={this.changeMentorId} />
        {dashboard}
      </div>
    );
  }
}
