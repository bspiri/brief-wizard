import React from "react";
import styled from "styled-components";

//style-components
const EmailForm = styled.input`
	border-radius: 5px;
	height: 7vh;
	border: 1px #757c9c solid;
	width: 25vw;
	font-size: 1.2em;
`;
const SubmitEmail = styled.button`
	border-radius: 5px;
	height: 8vh;
	border: none;
	background-color: #fee647;
	width: 23vw;
	margin: 3vh 0vw;
	font-size: 1.2em;
	font-weight: 800;
	color: #232733;
	padding: 5px 25px;
	@media (max-width: 1090px) {
		font-size: 1.1rem;
		width: 23vw;
	}
	@media (max-width: 900px) {
		font-size: 1.2rem;
	}
	@media (max-width: 800px) {
		font-size: 1.2rem;
		width: 40vw;
	}
	@media (max-width: 600px) {
		width: 53vw;
		font-size: 1.1rem;
	}
	@media (max-width: 300px) {
		font-size: 1rem;
	}
`;

class EmailInput extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: "",
		};
		this.handleChange = this.handleChange.bind(this);
	}

	//email input saved in the state.value
	handleChange(e) {
		this.setState({
			value: e.target.value,
		});
	}
	// react router Link on the button
	link = () => this.props.history.push(`${this.props.url}/wizard`);

	render() {
		console.log(this.props.history);
		return (
			<div>
				<form>
					<SubmitEmail onClick={this.link}>Use this brief template</SubmitEmail>
				</form>
			</div>
		);
	}


}

export default EmailInput;
