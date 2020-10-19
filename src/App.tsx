import "./App.css";
import { observer, Provider } from "mobx-react";
import React from "react";
import TaskContainer from "./containers/tasksContainer";
import rootStores from "./stores";
import { Route } from "react-router";
import { BrowserRouter } from "react-router-dom";

@observer
class App extends React.Component {
  componentDidMount() {
    document.title = "to do";
    document.body.style.backgroundColor= 'lightBlue';
  }

  render() {
    return (
			<Provider {...rootStores}>
				<BrowserRouter>
					<div className="App">
            <TaskContainer/>
					</div>
					<Route path="/Tasks" component={TaskContainer} />
				</BrowserRouter>
			</Provider>
		);
  }
}
export default App;
