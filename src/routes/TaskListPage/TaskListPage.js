import React from "react";
import "./TaskListPage.scss";
import TaskContext from "../../TaskContext";
import TaskItem from "../../components/TaskItem/TaskItem";
import { Link } from "react-router-dom";

class TaskListPage extends React.Component {
  static contextType = TaskContext;

  render() {
    let tasks = this.context.tasks;

    return (
      <main className="taskListPage">
        <h1>Daily Goals!</h1>
        <h3>Current goals:</h3>
        <p>Nothing is added to your current goals</p>
        <h3>Goals queue:</h3>
        <ul>
          {tasks.map((task) => {
            return (
              <li key={task.id}>
                <TaskItem name={task.name} />
              </li>
            );
          })}
        </ul>
        <button className="createTaskButton">
          <Link to={"/createTask"}>Create a task</Link>
        </button>
      </main>
    );
  }
}

export default TaskListPage;
