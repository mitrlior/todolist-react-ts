import "./App.css";
import { observer, Provider } from "mobx-react";
import React from "react";
import TaskContainer from "./containers/tasksContainer";
import rootStores from "./stores";

@observer
class App extends React.Component {
  componentDidMount() {
    document.title = "to do";
    //document.body.style.backgroundColor= 'red';
  }

  render() {
    return (
      <Provider {...rootStores}>
          <div className="App">
            <TaskContainer />
          </div>
      </Provider>
    );
  }
}
export default App;
