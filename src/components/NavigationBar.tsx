import React from "react";
import "./NavigationBar.css";
interface IProps {}
interface IState {}

export default class NavigationBar extends React.Component<IProps, IState> {
	render() {
		return (
			<div>
				<nav>
					<ul className="nav-links">
						<li>
							<a href="/">Home</a>
						</li>
						<li>
							<a href="/tasks">Tasks</a>
						</li>
						<li>
							<a href="/todos">Todos</a>
						</li>
						<li>
							<a href="/finished">Finished</a>
						</li>
					</ul>
				</nav>
			</div>
		);
	}
}
