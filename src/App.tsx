import "./App.css";
import { observer, Provider } from "mobx-react";
import React from "react";
import TaskContainer from "./containers/tasksContainer";
import rootStores from "./stores";
import { Route, Router, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./components/navbar";
import TodoTasksListComponent from "./components/Tasks/todoTasksListComponent";
import FinishedTasksListComponent from "./components/Tasks/finishedTasksListComponent";

@observer
class App extends React.Component {
	componentDidMount() {
		document.title = "to do";
		document.body.style.backgroundColor = "lightBlue";
	}

	render() {
		return (
			<Provider {...rootStores}>
				<BrowserRouter>
					<NavBar />
					<Switch>
						<Route path="/Tasks">
							<TaskContainer />
						</Route>
						<Route path="/todos">
							<TodoTasksListComponent />
						</Route>
						<Route path="/finished">
							<FinishedTasksListComponent />
						</Route>
						<Route path="/"></Route>
					</Switch>
				</BrowserRouter>
			</Provider>
		);
	}
}
export default App;
