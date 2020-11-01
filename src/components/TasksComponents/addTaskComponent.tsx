import React from "react";
import Task from "../../models/task.models";
import rootStores from "../../stores";
import { TASKS_STORE } from "../../stores/storesKeys";
import "./addTaskComponent.css";
import fire from '../../firebase/firebase'


interface IProps {}

interface IState {
	currentItem: {
		text: string;
		key: number;
	};
}

export default class AddTaskComponent extends React.Component<IProps, IState> {
	tasksStore = rootStores[TASKS_STORE];
	constructor(props: IProps) {
		super(props);
		this.state = {
			currentItem: {
				text: "",
				key: 0,
			},
		};
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	render() {
		return (
			<div className="to-do-wrapper">
				<form className="to-do-form" onSubmit={this.handleSubmit}>
					<input
						className="addTaskInput"
						type="text"
						placeholder="Enter Task"
						value={this.state.currentItem.text}
						onChange={this.handleInput}
					/>
					<button className="addTaskBtn" type="submit">
						Add Task
					</button>
				</form>
			</div>
		);
	}
	private handleInput = (e: any) => {
		this.setState({
			currentItem: {
				text: e.target.value,
				key: Date.now(),
			},
		});
	};
	private handleSubmit = async (
		e: React.FormEvent<HTMLFormElement>
	): Promise<void> => {
		e.preventDefault();
		if (this.state.currentItem.text !== "") {
			this.tasksStore.addTask(
				new Task(this.state.currentItem.text, this.state.currentItem.key)
			);
			this.setState({
				currentItem: {
					text: "",
					key: 0,
				},
			});
		}
	};
}
