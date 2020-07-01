import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import LandingPage from "../../routes/LandingPage/LandingPage";
import LoginPage from "../../routes/LoginPage/LoginPage";
import SignUpPage from "../../routes/SignUpPage/SignUpPage";
import TaskListPage from "../../routes/TaskListPage/TaskListPage";
import CreateTaskPage from "../../routes/CreateTaskPage/CreateTaskPage";
import { Route } from "react-router-dom";
import config from "../../config";
import Context from "../../Context";
import TokenService from "../../token-service";
import "./App.scss";

class App extends React.Component {
  state = {
    tasks: [],
    currentUser: "",
  };

  // credentials: username, password
  login = (credentials) => {
    console.log("credentials", JSON.stringify(credentials));

    return fetch(`${config.API_ENDPOINT}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    }).then((res) => {
      return res.json();
    });
  };

  postUser = (user) => {
    return fetch(`${config.API_ENDPOINT}/users`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    }).then((res) => {
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json();
    });
  };

  getUserInfo = (cb) => {
    fetch(`${config.API_ENDPOINT}/users`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${TokenService.getAuthToken()}`,
      },
    })
      .then((res) => res.json())
      .then((currentUser) => {
        this.setState({ currentUser }, cb(currentUser.id));
      });
  };

  getUserTasks = (userId, cb) => {
    return fetch(`${config.API_ENDPOINT}/tasks/${userId}`, {
      headers: {
        authorization: `bearer ${TokenService.getAuthToken()}`,
      },
    })
      .then((res) => res.json())
      .then((tasks) => {
        console.log(tasks);
        this.setState(
          {
            tasks,
          },
          cb
        );
      })
      .catch((err) => console.error(err));
  };

  addTask = (task, cb) => {
    fetch(`${config.API_ENDPOINT}/tasks`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify(task),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        this.setState(
          {
            tasks: [...this.state.tasks, data],
          },
          cb
        );
      })
      .catch((err) => console.error(err));
  };

  deleteTask = (taskId) => {
    const newTasks = this.state.tasks.filter((task) => task.id !== taskId);

    fetch(`${config.API_ENDPOINT}/tasks/${taskId}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => {
        if (!res.ok) {
          return res.json().then((error) => {
            throw error;
          });
        }
        //console.log("delete response", res.json());
      })
      .then(() => {
        this.setState({
          tasks: newTasks,
        });
      });
  };

  componentDidMount() {
    this.getUserInfo((id) => {
      this.getUserTasks(id, () => {
        console.log("user tasks", this.tasks);
      });
    });
    // if (TokenService.getAuthToken()) {
    //   this.getUserInfo(() => {});
    // }
  }

  render() {
    const contextValue = {
      tasks: this.state.tasks,
      currentUser: this.state.currentUser,
      addTask: this.addTask,
      deleteTask: this.deleteTask,
      getUserTasks: this.getUserTasks,
      postUser: this.postUser,
      login: this.login,
      getUserInfo: this.getUserInfo,
    };

    return (
      <Context.Provider value={contextValue}>
        <div className="app">
          <header>
            <Route path="/" component={Header} />
          </header>

          <main className="appMain">
            <Route exact path={"/"} component={LandingPage} />
            <Route path={"/login"} component={LoginPage} />
            <Route path={"/signUp"} component={SignUpPage} />
            <Route path={"/taskList"} component={TaskListPage} />
            <Route path={"/createTask"} component={CreateTaskPage} />
          </main>

          <footer>
            <Footer />
          </footer>
        </div>
      </Context.Provider>
    );
  }
}

export default App;
