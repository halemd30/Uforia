import React from "react";
import "./TaskItem.scss";
import Context from "../../Context";
import PropTypes from "prop-types";

class TaskItem extends React.Component {
  static contextType = Context;

  render() {
    return (
      <section className="taskItem">
        <div className="task">
          <h3>{this.props.name}</h3>
        </div>

        <button
          className="delete"
          onClick={() => {
            this.context.deleteTask(this.props.id);
            //console.log("props.id", this.context.deleteTask);
          }}
        >
          Delete
        </button>

        <button className="start">Start</button>
      </section>
    );
  }
}

export default TaskItem;
