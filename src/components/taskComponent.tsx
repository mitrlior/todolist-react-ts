import React from "react";
import Task from "../models/task.models";
import { Icon } from "semantic-ui-react";
import "./taskComponent.css";
import { observer } from "mobx-react";

interface IProps {
	task: Task;
	handleOnClick: any;
}

interface IState {}

@observer
export default class TaskComponent extends React.Component<IProps, IState> {
	render() {
		return (
			<div className="task" key={this.props.task.getKey}>
				<p>
					{this.displayText()}
					<span onClick={() => this.props.handleOnClick(this.props.task)}>
						<Icon name={this.showIcon()} />
					</span>
				</p>
			</div>
		);
	}
	private displayText() {
		if (this.props.task.getIsDone) {
			return <s>{this.props.task.getText}</s>;
		}
		return this.props.task.getText;
	}

	private showIcon() {
		return this.props.task.getIsDone ? "trash" : "check";
	}
}
