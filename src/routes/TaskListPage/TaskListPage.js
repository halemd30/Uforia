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
        <p>Nothing is added to your current goals</p>
        <h3>Goals queue:</h3>
        <ul>
          {tasks.map((task) => {
            return (
              <li className="taskListItem" key={task.id}>
                <TaskItem name={task.name} id={task.id} />
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
