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
          }}
        >
          Delete
        </button>

        {this.props.start_date === null && (
          <button
            className="startStop"
            onClick={() => this.context.startTask(this.props.id)}
          >
            Start
          </button>
        )}

        {this.props.start_date !== null && this.props.end_date === null && (
          <button
            className="startStop"
            onClick={() => this.context.endTask(this.props.id)}
          >
            Stop
          </button>
        )}
      </section>
    );
  }
}

export default TaskItem;
