import { observer } from "mobx-react";
import React from "react";
import AddTaskComponent from "../components/TasksComponents/addTaskComponent";
import FinishedTasksListComponent from "../components/TasksComponents/finishedTasksListComponent";
import TodoTasksListComponent from "../components/TasksComponents/todoTasksListComponent";
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
