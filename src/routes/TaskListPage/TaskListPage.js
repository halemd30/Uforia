import React from "react";
import "./TaskListPage.scss";
//import TaskContext from "../../TaskContext";
import TaskItem from "../../components/TaskItem/TaskItem";
import { Link } from "react-router-dom";
import Context from "../../Context";

class TaskListPage extends React.Component {
  //static contextType = TaskContext;
  static contextType = Context;

  render() {
    let tasks = this.context.tasks;
    console.log("tasks", tasks);

    return (
      <main className="taskListPage">
        <h1>Daily Goals!</h1>

        <h3>Current goals:</h3>
        <ul className="currentGoals">
          {tasks
            .filter((t) => t.start_date !== null && t.end_date === null)
            .map((task) => {
              return (
                <li className="taskListItem" key={task.id}>
                  <TaskItem {...task} />
                </li>
              );
            })}
          {tasks.filter((t) => t.start_date !== null && t.end_date === null)
            .length === 0 && <li>None Available</li>}
        </ul>

        <h3>Goals queue:</h3>
        <ul>
          {tasks
            .filter((t) => t.start_date === null && t.end_date === null)
            .map((task) => {
              return (
                <li className="taskListItem" key={task.id}>
                  <TaskItem {...task} />
                </li>
              );
            })}
          {tasks.filter((t) => t.start_date === null && t.end_date === null)
            .length === 0 && <li>None Available</li>}
        </ul>

        <h3>Completed goals:</h3>
        <ul>
          {tasks
            .filter((t) => t.start_date !== null && t.end_date !== null)
            .map((task) => {
              return (
                <li className="taskListItem" key={task.id}>
                  <TaskItem {...task} />
                </li>
              );
            })}
          {tasks.filter((t) => t.start_date !== null && t.end_date !== null)
            .length === 0 && <li>None Available</li>}
        </ul>

        <button className="createTaskButton">
          <Link to={"/createTask"}>Create a task</Link>
        </button>
      </main>
    );
  }
}

export default TaskListPage;
