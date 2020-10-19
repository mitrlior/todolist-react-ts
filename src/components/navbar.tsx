import React from "react";
import { Menu, MenuItemProps } from "semantic-ui-react";

interface IProps {}

interface IState {
  activeItem: string| undefined;
}

export default class NavBar extends React.Component<IProps, IState> {
	constructor(props: IProps) {
		super(props);
		this.state = {
			activeItem: "Home",
    };
    this.handleItemClick = this.handleItemClick.bind(this);
	}

	render() {
		return (
			<div>
				<Menu attached="top" tabular>
					<Menu.Item
						name="Home"
						active={this.state.activeItem === "Home"}
						onClick={this.handleItemClick}
					/>
					<Menu.Item
						name="Tasks"
						active={this.state.activeItem === "Tasks"}
						onClick={this.handleItemClick}
					/>
				</Menu>
			</div>
		);
	}
	private handleItemClick(e:React.MouseEvent<HTMLAnchorElement,MouseEvent>,item:MenuItemProps) {
    this.setState({activeItem: item.name});
	}
}
