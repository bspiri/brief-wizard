import React, { useState, useEffect } from "react";
import EmailInput from "./EmailInput";
import styled from "styled-components";
// import briefData from "./briefData"
import axios from "axios";

//style-components
const HeadWrapper = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	margin: 1vw 5vw;
	@media (max-width: 700px) {
		flex-direction: column-reverse;
		justify-content: center;
	}
`;
const Text = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	margin: 5vw;
	@media (max-width: 600px) {
		align-items: center;
	}
`;
export const Title1 = styled.h1`
	font-size: 3.5em;
	font-weight: 800;
	color: #232733;
	margin-top: 1vh;
	@media (max-width: 800px) {
		font-size: 2.5em;
		text-align: center;
	}
`;
//margin-top:${props => !props.margin && "1vh"};
const IMG = styled.img`
	height: 50vh;
	width: 35vw;
	@media (max-width: 900px) {
		height: 35vh;
		width: 35vw;
	}
	@media (max-width: 700px) {
		height: 50vh;
		width: 80vw;
	}
`;
const Parag = styled.p`
	margin: 40px 0px 14px;
`;

// url={props.match.url} history={props.history}
const BriefHead = (props) => {
	const [templates, setTemplates] = useState([]);
	useEffect(() => {
		axios.get("/admins/templates").then((res) => {
			console.log(res.data);
			setTemplates(res.data);
		});
	}, []);

	//props to send to the EmailInput for the Link router
	let propsToSend = {
		url: props.match.url,
		history: props.history,
	};

	return (
		<div>
			<HeadWrapper>
				<Text>
					<div>
						<Title1>{templates.filter((el) => el._id === props.match.params.id).map((el) => el.title)}</Title1>
						<Parag>{templates.filter((el) => el._id === props.match.params.id).map((el) => el.subtitle.blocks.map((el) => el.text))}</Parag>
					</div>
					<EmailInput {...propsToSend} />
				</Text>
				<div>
					<IMG src="https://wolper.com.au/wp-content/uploads/2017/10/image-placeholder.jpg" alt="gg" />
				</div>
			</HeadWrapper>
		</div>
	);
};

export default BriefHead;
