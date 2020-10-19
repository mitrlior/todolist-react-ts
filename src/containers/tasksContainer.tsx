import { observer } from "mobx-react";
import React from "react";
import AddTaskComponent from "../components/addTaskComponent";
import FinishedTasksListComponent from "../components/finishedTasksListComponent";
import TodoTasksListComponent from "../components/todoTasksListComponent";
import "./TaskContainer.css";

interface IProps {}

interface IState {}

@observer
export default class TaskContainer extends React.Component<IProps, IState> {
	render() {
		return (
			<div className="Tasks">
				<AddTaskComponent />
				<TodoTasksListComponent />
				<FinishedTasksListComponent />
			</div>
		);
	}
}
