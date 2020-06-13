import React from "react";
import "./TaskItem.scss";

class TaskItem extends React.Component {
  render() {
    return (
      <section className="taskItem">
        <div className="task">
          <h3>{this.props.name}</h3>
        </div>

        <button className="delete">Delete</button>

        <button className="start">Start</button>
      </section>
    );
  }
}

export default TaskItem;
