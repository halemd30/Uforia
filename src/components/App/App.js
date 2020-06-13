import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import LandingPage from "../../routes/LandingPage/LandingPage";
import TaskListPage from "../../routes/TaskListPage/TaskListPage";
import CreateTaskPage from "../../routes/CreateTaskPage/CreateTaskPage";
import { Route, Switch } from "react-router-dom";

// state;
// tasks: [];
// goals: [];

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <header>
          <Header />
        </header>

        <main className="appMain">
          <Switch>
            <Route exact path={"/"} component={LandingPage} />
            <Route path={"/taskList"} component={TaskListPage} />
            <Route path={"/createTask"} component={CreateTaskPage} />
          </Switch>
        </main>

        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
}

export default App;
