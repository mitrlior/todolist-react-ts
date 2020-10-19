import "./App.css";
import { observer, Provider } from "mobx-react";
import React from "react";
import TaskContainer from "./containers/tasksContainer";
import rootStores from "./stores";
import { Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { Input, Menu, Segment } from "semantic-ui-react";
import NavBar from "./components/navbar";

@observer
class App extends React.Component {
  componentDidMount() {
    document.title = "to do";
    document.body.style.backgroundColor= 'lightBlue';
  }

  render() {
    return (
			<Provider {...rootStores}>
        <NavBar/>
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
