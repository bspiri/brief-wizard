import React, { Component } from "react";
// import Question from "./Question";
// import Checkboxes from "./Checkboxes";
import StyledDropzone from "./StyledDropzone";
import QuestionButtons from "./QuestionButtons";
import styled from "styled-components";
import ProgBar from "./ProgBar";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Check from "./Check";
import { device } from "./device";
import axios from "axios";

/*
{
  questions : ... , // no action needed
  activeQuestionIndex : ..., // action 
  activePage: ..., // action
  answers: ... // action
}

*/

const QuestionContainer = styled.div`
	display: flex;
	align-items: center;
	flex-flow: column wrap;
	justify-content: center;
	background-color: white;
	/* width: 60vw; */
	/* overflow: hidden; */
	height: 100%;
`;

const QuestionTitle = styled.h1`
	font-size: 2.2em;
	align-self: flex-start;
	/* margin-top: 2%; */
	@media ${device.mobileS} {
		margin-top: 0;
		font-size: 1.8em;
	}

	@media ${device.tablet} {
		margin-top: 5%;
		font-size: 2em;
	}

	@media ${device.laptop} {
		margin-top: 5%;
		font-size: 2em;
	}
`;
const QuestionBody = styled.p`
	font-size: 1.2em;
	align-self: flex-start;
	margin-top: 5%;
	@media ${device.tablet} {
		margin-top: 1%;
	}
`;

const QuestionInput = styled.input.attrs((props) => ({
	// we can define static props
	type: props.type || "text",

	// or we can define dynamic ones
	size: props.size || "1.2em",
}))`
	align-self: flex-start;
	color: black;
	font-size: 1em;
	border: 1px solid #f1f1f1;
	border-radius: 6px;
	width: 80%;
	padding-left: 2%;
	height: 5vh;
	margin-top: 5%;
	@media ${device.mobileS} {
		width: 95%;
		height: 7vh;
	}
`;
const TextAreaInput = styled.textarea`
	width: 80%;
	border-radius: 5px;
	height: 18vh;
	margin-top: 5%;
	align-self: flex-start;
	@media ${device.mobileS} {
		width: 100%;
	}
	@media ${device.tablet} {
		width: 90%;
	}
`;
const QuestionButtonContinue = styled.button`
	background-color: lightblue;
	align-self: flex-start;
	width: 200px;
	height: 45px;
	font-size: 1em;
	font-weight: 600;
	border: none;
	background: #398af7;
	color: white;
	border-radius: 5px;
	margin-top: 5%;
	@media ${device.mobileS} {
		width: 100%;
		margin-top: 10%;
		margin-bottom: 10%;
	}

	@media ${device.tablet} {
		margin-top: 10%;
		width: 200px;
	}

	@media ${device.laptop} {
		margin-top: 5%;
		width: 200px;
	}
`;
const OptionsContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	margin-top: 4%;
	/* // border: 2px solid black; */
	width: 100%;
	align-self: flex-start;
	@media ${device.mobileS} {
		grid-template-columns: 1fr;
		align-self: center;
		margin-top: 0;
	}

	@media ${device.tablet} {
		width: 100%;
		grid-template-columns: 1fr 1fr;
		align-self: flex-start;
	}

	@media ${device.laptop} {
	}
`;
const PagContainer = styled.div`
	height: 7vh;
	width: 20vw;
	/* border: 1px solid gray; */
	display: flex;
	flex-flow: row wrap;
	position: absolute;
	/* // justify-content: center; */
	top: 80%;
	left: 75%;

	@media ${device.mobileS} {
		position: fixed;
		width: 80%;
		/* margin-top: 10%; */
		left: 7%;
		top: 86%;
		background: #fff;
		padding: 20px;
		justify-content: space-between;
	}
	@media ${device.mobileM} {
		position: fixed;
		width: 80%;
		/* margin-top: 10%; */
		left: 7%;
		top: 88%;
		background: #fff;
		padding: 20px;
		justify-content: space-between;
	}

	@media ${device.tablet} {
		position: fixed;
		width: 250px;
		/* margin-top: 10%; */
		left: 70%;
		top: 86%;
		background: #fff;
		padding: 20px;
		justify-content: space-between;
	}

	@media ${device.laptop} {
		width: 300px;
		font-size: 1.2em;
	}
`;
const PagTextAndProgress = styled.div`
	width: 90%;
	display: flex;
	flex-flow: column wrap;
`;
const PagIconsWrapper = styled.div`
	width: 10%;
	display: flex;
	flex-flow: column wrap;
`;
const StyledChevIcon = styled(FontAwesomeIcon)`
	margin-left: 20%;
	/* border: 1px solid #f8f8f8; */
	height: 2em;
`;
const questions = [
	{
		id: 1039932,
		order: 1,
		type: "text",
		title: "this is the first question",
		options: null,
		body: "this is the first question body",
	},
	{
		id: 22131,
		order: 2,
		type: "buttons",
		title: "this is the second question",
		options: [
			{ title: "Yes, it is launched", picked: false },
			{ title: "Not launched", picked: false },
			{ title: "I'm not sure", picked: true },
		],
		body: "this is the second question body",
	},
	{
		id: 4009583,
		order: 3,
		type: "checkboxes",
		title: "What service do you need for this project?",
		options: ["Marketing Strategy", "Graphic Design", "social Media Campaigns", "Media Buying", "Ongoing Maintenance"],
		body:
			"What other plans for the business might need to be considered when creating your new brand? Are you planning to move to new premises, or to start showing at exhibitions in the future?",
	},
	{
		id: 4003333,
		order: 4,
		type: "upload",
		title: "upload?",
		options: [],
		body: "What would you like to upload?",
	},
	{
		id: 2332323,
		order: 5,
		type: "textarea",
		title: "This is a question with a textarea answer ?",
		options: [],
		body: "lorem ipsum",
	},
];

// Since the questions did not arrive from API yet, list of answers are created here, which is initially emty
const answerList = questions.map((question, index) => {
	const answer = {
		id: question.id,
		type: question.type,
		val: "",
		selectedOptions: [],
	};
	return answer;
});

class Questions extends Component {
	constructor(props) {
		super(props);
		this.state = {
			activeQuestionIndex: 0,
			singleChoice: "",

			answers: answerList,

			questions: questions,
		};
	}
	// componentDidMount() {
	// 	axios.get("");
	// }

	// type = text
	handleQuestionInput = (e) => {
		const inputValue = e.target.value;
		const newAnswerslist = this.state.answers;

		newAnswerslist[this.state.activeQuestionIndex].val = inputValue;

		// const ans = newAnswerslist[this.state.activeQuestionIndex];
		// ans.val = inputValue;

		this.setState({ answers: newAnswerslist });
	};

	// type = buttons
	handleSingleChoice = (e) => {
		const inputValue = e.target.innerText;
		const newAnswerslist = this.state.answers;
		newAnswerslist[this.state.activeQuestionIndex].val = inputValue;
		this.setState({
			answers: newAnswerslist,
			singleChoice: e.target.innerText,
		});
	};

	// type: checkbox
	handleCheck = (value, isChecked) => {
		const newAnswerslist = this.state.answers;
		if (isChecked) {
			newAnswerslist[this.state.activeQuestionIndex].selectedOptions.push(value);
		} else {
			const valueindex = newAnswerslist[this.state.activeQuestionIndex].selectedOptions.indexOf(value);
			newAnswerslist[this.state.activeQuestionIndex].selectedOptions.splice(valueindex, 1);
		}
		this.setState({ answers: newAnswerslist });
	};

	// type: textarea
	handleTextAreaInput = (e) => {
		const inputValue = e.target.value;
		const newAnswerslist = this.state.answers;
		newAnswerslist[this.state.activeQuestionIndex].val = inputValue;
		// const ans = newAnswerslist[this.state.activeQuestionIndex];
		// ans.val = inputValue;
		// newAnswerslist[this.state.activeQuestionIndex] = ans
		this.setState({ answers: newAnswerslist });
	};

	//type: upload

	handleIncrementQuestions = () => {
		console.log(this.state.activeQuestionIndex);

		// if there are more questions
		if (this.state.activeQuestionIndex < questions.length - 1) {
			let questionIndex = this.state.activeQuestionIndex + 1;

			this.setState({
				activeQuestionIndex: questionIndex,
			});

			// this.props.history.replace(`${this.props.match.url}/${this.state.activeQuestionIndex + 1}`)

			// if all questions are answered
		} else {
			// implement this
			console.log("all finished!");
			this.props.handleFinish();
		}
	};

	handlePagNext = () => {
		// if there are more questions
		if (this.state.activeQuestionIndex < questions.length - 1) {
			let questionIndex = this.state.activeQuestionIndex + 1;

			this.setState({
				activeQuestionIndex: questionIndex,
			});
		}
		// this.setState({
		//   activeQuestionIndex:
		//     this.state.activeQuestionIndex !== questions.length
		//       ? this.state.activeQuestionIndex + 1
		//       : this.state.activeQuestionIndex,
		// });
	};

	handlePagPrev = () => {
		if (this.state.activeQuestionIndex > 0) {
			let questionIndex = this.state.activeQuestionIndex - 1;

			this.setState({
				activeQuestionIndex: questionIndex,
			});
		}
	};

	render() {
		console.log(this.state.answers);

		// active Question
		const question = questions[this.state.activeQuestionIndex];
		let question_params;

		// deciding which dynamic questions params will be used.
		if (question.type === "text") {
			question_params = <QuestionInput onChange={this.handleQuestionInput} placeholder="A small text input" size="1em" type="text"></QuestionInput>;
		} else if (question.type === "textarea") {
			question_params = <TextAreaInput onChange={this.handleTextAreaInput}>Something Here</TextAreaInput>;
		} else if (question.type === "checkboxes") {
			question_params = (
				<OptionsContainer>
					{question.options.map((option, index) => (
						<Check key={`option_${index}`} label={option} handleFunc={this.handleCheck}></Check>
					))}
				</OptionsContainer>
			);
		} else if (question.type === "buttons") {
			question_params = (
				<OptionsContainer>
					{question.options.map((option, index) => (
						<QuestionButtons
							key={`option_${index}`}
							option={option.title}
							onClick={this.handleSingleChoice}
							clicked={this.state.singleChoice === option.title ? true : false}
						></QuestionButtons>
					))}
				</OptionsContainer>
			);
		} else if (question.type === "upload") {
			question_params = <StyledDropzone />;
		} else {
			question_params = <h1>Unimplemented type</h1>;
		}

		return (
			<QuestionContainer className="question-container">
				<QuestionTitle>{question.title}</QuestionTitle>
				<QuestionBody>{question.body}</QuestionBody>
				{question_params}
				{/* <NavLink to={`${this.props.location.pathname}/${this.state.activeQuestionIndex + 1}`}> */}
				<QuestionButtonContinue onClick={this.handleIncrementQuestions}>Continue</QuestionButtonContinue>
				{/* </NavLink> */}
				<PagContainer>
					<PagTextAndProgress>
						<h5>
							{this.state.activeQuestionIndex} / {questions.length} questions answered{" "}
						</h5>
						<ProgBar bgcolor="#398af7" completed={(this.state.activeQuestionIndex / questions.length) * 100} />
					</PagTextAndProgress>
					<PagIconsWrapper>
						<StyledChevIcon icon={faChevronUp} onClick={this.handlePagNext} />
						<StyledChevIcon icon={faChevronDown} onClick={this.handlePagPrev} />
					</PagIconsWrapper>
				</PagContainer>
			</QuestionContainer>
		);
	}
}

export default Questions;

/*
 <Question
        type={question.questions[question.pageCount].type}
        title={question.questions[props.pageCount].title}
        body={question.questions[props.pageCount].body}
        options={question.questions[props.pageCount].options}
      />
*/
