import React, { Component } from "react";

import styled from "styled-components";
import Questions from "./Questions";
import ContinueButton from "./ContinueButton";
import LoginModal from "./LoginModal";
import { device } from "./device";
import EmailNavbar from "./EmailNavbar";

const WizardContainer = styled.div`
	/* display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column wrap; */
	margin: 3% 10% 3% 10%;
	@media ${device.mobileS} {
		margin: 17% 8% 20% 8%;
	}

	@media ${device.tablet} {
		margin: 5% 15% 3% 15%;
	}

	@media ${device.laptop} {
		margin: 5% 15% 1% 15%;
	}
`;

const StartPage = styled.div`
	/* display: flex; */
	font-size: 1em;
	/* margin: 4em; */
	white-space: pre-line;
`;
const LoginPage = styled.div`
	/* display: flex; */
	font-size: 1em;
	/* margin: 4em; */
	white-space: pre-line;
`;
const StyledParagraph = styled.p`
	font-size: 1.5em;
	margin-top: 15%;
	@media ${device.mobileS} {
		margin-top: 5%;
	}

	@media ${device.tablet} {
		margin-top: 5%;
	}

	@media ${device.laptop} {
		margin-top: 5%;
	}
`;
const EndPage = styled.div`
	/* display: flex; */
	font-size: 1em;
	/* margin: 4em; */
	white-space: pre-line;
`;

const StyledH1 = styled.h1`
	font-size: 2.3em;
	margin-top: 10%;
	@media ${device.mobileS} {
		margin-top: 45%;
		font-size: 1.8em;
	}

	@media ${device.tablet} {
		margin-top: 10%;
		font-size: 2em;
	}

	@media ${device.laptop} {
		margin-top: 15%;
		font-size: 2em;
	}
`;

export default class Wizard extends Component {
	constructor(props) {
		super(props);

		this.state = {
			activePage: "firstPage", //firstPage,  endPage, questionPage
		};
	}



	handleStartQuestions = () => {
		this.setState({
			activePage: "questionPage",
		});
	};

	handleShowEndPage = () => {
		this.setState({
			activePage: "endPage",
		});
	};

	handleViewBrief = () => { };
	// react router Link on the button
	link = () => this.props.history.push(`${this.props.match.url}/preview`);
	//props to send to the Questions for the Link router
	propsToSend = {
		match: this.props.match,
		history: this.props.params,
		location: this.props.location,
	};

	render() {
		console.log("current page : " + this.state.activePage);
		console.log(this.props.location);

		let firstPage = "";
		if (this.state.activePage === "firstPage") {
			firstPage = (
				<StartPage className="start-page">
					<StyledH1>Digital Marketing Brief Questionnaire</StyledH1>
					<StyledParagraph>
						Create briefs with interactive questionnaires and enjoy features such as read-receipts and electronic approval.
					</StyledParagraph>
					<ContinueButton onClick={this.handleStartQuestions}>Start Questionnaire</ContinueButton>
				</StartPage>
			);
		}

		let questionPage = "";
		if (this.state.activePage === "questionPage") {
			questionPage = <Questions handleFinish={this.handleShowEndPage} {...this.propsToSend} />;
		}

		let endPage = "";
		if (this.state.activePage === "endPage") {
			endPage = (
				<EndPage>
					<StyledH1>Digital Marketing Brief Questionnaire</StyledH1>
					<StyledParagraph>Great, you completed the brief.</StyledParagraph>
					<ContinueButton
						onClick={() => {
							this.handleViewBrief();
							this.link();
						}}
					>
						View your brief
					</ContinueButton>
				</EndPage>
			);
		}

		return (
			<div>
				<EmailNavbar />
				<WizardContainer className="wizard-container">
					{firstPage}
					{questionPage}
					{endPage}
				</WizardContainer>
			</div>
		);
	}
}
