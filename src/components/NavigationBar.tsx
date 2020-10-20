import React from "react";

interface IProps {}
interface IState {}

export default class NavigationBar extends React.Component<IProps, IState> {
	render() {
		return (
			<nav>
				<div>
					<ul className="nav-links">
						<li>
							<a className="active" href="/" />
							Home
						</li>
						<li>
							<a href="/tasks" />
							Tasks
						</li>
						<li>
							<a href="/todos" />
							Todos
						</li>
						<li>
							<a href="/finished" />
							Finisehd
						</li>
					</ul>
				</div>
			</nav>
		);
	}
}
