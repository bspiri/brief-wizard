import React, { useState } from "react";
import "./NewQuestion.css";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import styled from "styled-components";

const Button = styled.button`
	height: 45px;
	padding: 0px 10px;
	font-size: 1.1em;
	font-weight: 400;
	background: #fafafa;
	border-radius: 8px;
	color: #454d69;
	border: 1px solid #dfe0e5;
	margin-right: 20px;
	margin-bottom: 50px;
	cursor: pointer;
	@media (max-width: 600px) {
		margin-right: 0px;
		margin-bottom: 20px;
	}
	:hover {
		background: #eeeeee;
	}
`;

const Button2 = styled.button`
	height: 45px;
	padding: 0px 10px;
	font-size: 1.1em;
	font-weight: 600;
	border: none;
	background: #398af7;
	color: white;
	border-radius: 4px;
	margin-right: 20px;
	margin-bottom: 10px;
	margin-top: 10px;
	cursor: pointer;
	@media (max-width: 600px) {
		margin-right: 0px;
		margin-bottom: 20px;
	}
`;
const Button4 = styled.button`
	height: 45px;
	padding: 0px 10px;
	font-size: 1.1em;
	font-weight: 600;
	border: none;
	background: #398af7;
	color: white;
	border-radius: 4px;
	margin-right: 20px;
	margin-bottom: 40px;

	cursor: pointer;
	@media (max-width: 600px) {
		margin-right: 0px;
		margin-bottom: 20px;
	}
`;

const Button3 = styled.button`
	height: 45px;
	padding: 0px 10px;
	font-size: 1.1em;
	font-weight: 600;
	border: none;
	background: #868a9c;
	color: white;
	border-radius: 4px;
	margin-top: 10px;
	margin-bottom: 10px;
	cursor: pointer;
	@media (max-width: 600px) {
		margin-right: 0px;
		margin-bottom: 20px;
	}
`;

export default function NewQuestion() {
	const [questionTitle, setQuestionTitle] = useState();
	const [questionType, setQuestionType] = useState("text");
	const [instructions, setInstructions] = useState();
	const [plainTextRows, setPlainTextRows] = useState();
	const [multipleChoiceNum, setMultipleChoiceNum] = useState();
	const [singleChoiceCounter, setSingleChoiceCounter] = useState(0);
	const [multipleChoiceCounter, setMultipleChoiceCounter] = useState(0);

	return (
		<div>
			<div className="questionContainer">
				<h1>New Question</h1>

				<h3>Question Title</h3>

				<Box className="questionInputBox">
					<TextField
						className="questionInput"
						id="outlined-basic"
						// label="Question Title"
						onChange={(e) => setQuestionTitle(e.target.value)}
						value={questionTitle}
						variant="outlined"
					/>
				</Box>

				<h3>Instructions</h3>

				<Box width={1} className="questionInputBox">
					<TextField
						className="questionInput"
						id="outlined-multiline-static"
						multiline
						rows={6}
						// label="Instructions"
						onChange={(e) => setInstructions(e.target.value)}
						value={instructions}
						variant="outlined"
					/>
				</Box>

				<h3>Type</h3>
				<div>
					<Button id={questionType === "text" && "activeBtn"} onClick={() => setQuestionType("text")}>
						Plain Text
					</Button>
					<Button id={questionType === "single-choice" && "activeBtn"} onClick={() => setQuestionType("single-choice")}>
						Single Choice
					</Button>
					<Button id={questionType === "multiple-choice" && "activeBtn"} onClick={() => setQuestionType("multiple-choice")}>
						Multiple Choice
					</Button>
					<Button id={questionType === "file-upload" && "activeBtn"} onClick={() => setQuestionType("file-upload")}>
						File Upload
					</Button>
				</div>
				<div>
					{questionType === "text" ? (
						<div>
							<h3>Rows</h3>
							<Box className="questionInputBox">
								<TextField
									id="outlined-basic"
									onChange={(e) => setPlainTextRows(e.target.value)}
									// label="Question Title"
									type="number"
									className="numInput"
									variant="outlined"
								/>
							</Box>
							<p className="inputDescription">
								1 row means single line input, multiple rows shows a textarea for people to give more detailed answers
							</p>
						</div>
					) : questionType === "single-choice" ? (
						<div>
							<h3>Choices</h3>

							<Box className="questionInputBox">
								<TextField
									id="outlined-basic"
									// label="Question Title"

									variant="outlined"
								/>
							</Box>
							<Button4 onClick={() => setSingleChoiceCounter(singleChoiceCounter + 1)}>Add Choice</Button4>
						</div>
					) : questionType === "multiple-choice" ? (
						<div>
							<h3>Choices</h3>
							<Box className="questionInputBox">
								<TextField
									id="outlined-basic"
									// label="Question Title"

									variant="outlined"
								/>
							</Box>
							<Button4 onClick={() => setMultipleChoiceCounter(multipleChoiceCounter + 1)}>Add Choice</Button4>
							<h3>Maximum number of choices (0 if unlimited)</h3>
							<Box className="questionInputBox">
								<TextField
									id="outlined-basic"
									// label="Question Title"
									type="number"
									onChange={(e) => setMultipleChoiceNum(e.target.value)}
									className="numInput"
									variant="outlined"
								/>
							</Box>
						</div>
					) : null}
				</div>
			</div>
			<div className="footerButtons">
				<Button2>Save Question</Button2>
				<Button3>Discard</Button3>
			</div>
		</div>
	);
}
