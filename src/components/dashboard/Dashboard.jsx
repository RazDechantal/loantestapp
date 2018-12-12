import React, { Component } from "react";
import Notification from "../dashboard/Notification";
import ProjectList from "../projects/ProjectList";

class Dashboard extends Component {
  render() {
    return (
      <div className="Dashboard container">
        <div className="Row">
          <div className="col s12 m6">
            <ProjectList />
          </div>
          <div className="col s12 m5 offset-m1">
            <Notification />
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
