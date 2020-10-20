import React from "react";
import { NavLink } from "react-router-dom";
import { Menu, MenuItemProps } from "semantic-ui-react";

interface IProps {}

interface IState {
	activeItem: string | undefined;
}

export default class NavBar extends React.Component<IProps, IState> {
	constructor(props: IProps) {
		super(props);
		this.state = {
			activeItem: "",
		};
		this.handleItemClick = this.handleItemClick.bind(this);
	}

	render() {
		return (
			<div>
				<Menu attached="top" tabular>
					<Menu.Item
						as={NavLink}
						to="/"
						name="home"
						active={this.state.activeItem === "home"}
						onClick={this.handleItemClick}
					/>
					<Menu.Item
						as={NavLink}
						to="/Tasks"
						name="Tasks"
						active={this.state.activeItem === "Tasks"}
						onClick={this.handleItemClick}
					/>
					<Menu.Item
						as={NavLink}
						to="/todos"
						name="Todos"
						active={this.state.activeItem === "Todos"}
						onClick={this.handleItemClick}
					/>
					<Menu.Item
						as={NavLink}
						to="/finished"
						name="Finished"
						active={this.state.activeItem === "Finished"}
						onClick={this.handleItemClick}
					/>
				</Menu>
			</div>
		);
	}
	private handleItemClick(
		e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
		item: MenuItemProps
	) {
		this.setState({ activeItem: item.name });
	}
}
