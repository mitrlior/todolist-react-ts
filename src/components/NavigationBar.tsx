import React from "react";
import { Link } from "react-router-dom";
import "./NavigationBar.css";
interface IProps {}
interface IState {}

export default class NavigationBar extends React.Component<IProps, IState> {
	render() {
		return (
			<div className="navbar">
					<Link to="/">Home</Link>
					<Link to="/tasks">Tasks</Link>
					<Link to="/todos">Todos</Link>
					<Link to="/finished">Finished</Link>
					<Link to="signup">SignUp</Link>
			</div>
		);
	}
}
