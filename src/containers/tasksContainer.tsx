import { observer } from "mobx-react";
import React from "react";
import AddTaskComponent from "../components/Tasks/addTaskComponent";
import FinishedTasksListComponent from "../components/Tasks/finishedTasksListComponent";
import TodoTasksListComponent from "../components/Tasks/todoTasksListComponent";
import "./TaskContainer.css";

interface IProps {}

interface IState {}

@observer
export default class TaskContainer extends React.Component<IProps, IState> {
	render() {
		return (
			<div className="AllTasks">
				<AddTaskComponent />
				<TodoTasksListComponent />
				<FinishedTasksListComponent />
			</div>
		);
	}
}
