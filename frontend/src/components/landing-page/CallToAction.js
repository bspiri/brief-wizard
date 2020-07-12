import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
	padding: 50px 15% 50px 15%;
	text-align: center;
	height: 370px;
	@media (max-width: 600px) {
		padding: 0px 5% 20px 5%;
	}
`;

const Block = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	background: #fafafa;
	width: 100%;
	height: 300px;
	border: 1px solid #dfe0e5;
	border-radius: 10px;
`;

const H2 = styled.h2`
	font-weight: 500;
	@media (max-width: 600px) {
		font-size: 1.3em;
	}
`;
const CallToAction = () => {
	return (
		<Wrapper>
			<Block>
				<H2>Join SuperOkay call-to-action block</H2>
			</Block>
		</Wrapper>
	);
};

export default CallToAction;
