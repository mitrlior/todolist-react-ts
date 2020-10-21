import React from "react";
import { Link } from "react-router-dom";
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
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/tasks">Tasks</Link>
						</li>
						<li>
							<Link to="/todos">Todos</Link>
						</li>
						<li>
							<Link to="/finished">Finished</Link>
						</li>
					</ul>
				</nav>
			</div>
		);
	}
}
