import React from "react";
import "./SignUpForm.css";
interface IProps {
	name?: string;
	value?: string;
}

interface IState {
	[key: string]: any;
	username: string;
	email: string;
	password: string;
	errors: {
		username: string;
		email: string;
		password: string;
	};
}
const Regex = RegExp(
	/^\s?[A-Z0–9]+[A-Z0–9._+-]{0,}@[A-Z0–9._+-]+\.[A-Z0–9]{2,4}\s?$/i
);

export class SignUP extends React.Component<IProps, IState> {
	constructor(props: IProps) {
		super(props);
		const initialState = {
			username: "",
			email: "",
			password: "",
			errors: {
				username: "",
				email: "",
				password: "",
			},
		};
		this.state = initialState;
		this.handleChange = this.handleChange.bind(this);
	}
	render() {
		const { errors } = this.state;  
		return (
			<div className="wrapper">
				<div className="form-wrapper">
					<h2>Sign Up</h2>
					<form onSubmit={this.handleSubmit} noValidate>
						<div className="username">
							<label htmlFor="username">User Name</label>
							<input type="text" name="username" onChange={this.handleChange} />
							{errors.username.length > 0 && (
								<span style={{ color: "red" }}>{errors.username}</span>
							)}
						</div>
						<div className="email">
							<label htmlFor="email">Email</label>
							<input type="email" name="email" onChange={this.handleChange} />
							{errors.email.length > 0 && (
								<span style={{ color: "red" }}>{errors.email}</span>
							)}
						</div>
						<div className="password">
							<label htmlFor="password">Password</label>
							<input
								type="password"
								name="password"
								onChange={this.handleChange}
							/>
							{errors.password.length > 0 && (
								<span style={{ color: "red" }}>{errors.password}</span>
							)}
						</div>
						<div className="submit">
							<button className="signUpBtn">Register</button>
						</div>
					</form>
				</div>
			</div>
		);
	}
	private handleChange = (e: React.FormEvent<HTMLInputElement>) => {
		e.preventDefault();
		let name = e.currentTarget.name;
		let value = e.currentTarget.value;
		this.setState({ [name]: value } as Partial<IState>);
		console.log(this.state);
		let errors = this.state.errors;
		switch (name) {
			case "username":
				errors.username =
					value.length < 5 ? "Username must be 5 characters long!" : "";
				break;
			case "email":
				errors.email = Regex.test(value) ? "" : "Email is not valid!";
				break;
			case "password":
				errors.password =
					value.length < 8 ? "Password must be eight characters long!" : "";
				break;
			default:
				break;
		}
		this.setState(Object.assign(this.state, { errors, [name]: value }));
		console.log(this.state.errors);
	};
	handleSubmit = (event: any) => {};
}
