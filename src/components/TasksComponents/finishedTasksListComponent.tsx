import { observer } from "mobx-react";
import React from "react";
import Task from "../../models/task.models";
import rootStores from "../../stores";
import { TASKS_STORE } from "../../stores/storesKeys";
import TaskComponent from "../taskComponent";

interface IProps {}

interface IState {}

@observer
export default class FinishedTasksListComponent extends React.Component<
	IProps,
	IState
> {
	tasksStore = rootStores[TASKS_STORE];
	render() {
		return (
			<div className="Tasks">
				<h1>Finished Tasks</h1>
				{this.tasksStore.reveresedFinishedTasks.map((task: Task) => {
					return (
						<TaskComponent
							task={task}
							handleOnClick={() => this.handleOnClick(task)}
						/>
					);
				})}
			</div>
		);
	}
	private handleOnClick(task: Task) {
		if (task.getIsDone) {
			this.tasksStore.removeTask(task);
		} else {
			this.tasksStore.doneTask(task);
		}
	}
}
