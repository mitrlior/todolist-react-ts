import "./App.css";
import { observer, Provider } from "mobx-react";
import React from "react";
import TaskContainer from "./containers/tasksContainer";
import rootStores from "./stores";

@observer
class App extends React.Component {
  componentDidMount() {
    document.title = "to do";
  }

  render() {
    return (
        <Provider {...rootStores}>
          <TaskContainer />
        </Provider>
    );
  }
}
export default App;
