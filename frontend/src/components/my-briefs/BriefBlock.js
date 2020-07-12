import React from "react";
import styled from "styled-components";

const Block = styled.div`
	display: flex;
	padding: 30px;
	justify-content: space-between;
	align-items: center;
	background: white;
	width: 95%;
	height: 100px;
	border: 1px solid #dfe0e5;
	border-radius: 10px;
	box-shadow: 0px 7px 21px -14px rgba(0, 0, 0, 0.7);
	margin-bottom: 200px;
	@media (max-width: 600px) {
		flex-direction: column;
		height: 100%;
		padding: 10px;
	}
`;

const LeftSection = styled.div`
	display: flex;
	align-content: center;
	flex-direction: column;
`;

const H2 = styled.h2`
	margin-top: 10px;
	margin-bottom: 10px;
	font-size: 1.7em;
	@media (max-width: 600px) {
		font-size: 1.5em;
		margin-bottom: 20px;
	}
`;

const P = styled.p`
	font-size: 1.1em;
	line-height: 25px;
	color: #454d69;
	margin-bottom: 20px;
	@media (max-width: 600px) {
		font-size: 1em;
	}
`;

const A = styled.a`
	color: #40b2f0;
	text-decoration: underline;
`;

const Button = styled.a`
	color: #0098eb;
	font-weight: 700;
	text-decoration: underline;
	margin-bottom: 40px;
`;

const BriefBlock = () => {
	return (
		<Block>
			<LeftSection>
				<H2>Acme LTD Marketing Brief</H2>
				<P>
					Share link: <A>https://briefs.superokav.com/brief-nf4397v8ßby</A>
				</P>
			</LeftSection>
			<Button>Edit Brief</Button>
		</Block>
	);
};

export default BriefBlock;
