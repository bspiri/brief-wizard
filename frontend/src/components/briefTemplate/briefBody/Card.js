import React from "react";
import styled from "styled-components";
import placeholder from "./placeholder/placeholder.jpg";

//style-components
const Grid = styled.div`
	display: flex;
	width: 100%;
	flex-wrap: wrap;
`;
const Card = styled.div`
	display: inline-block;
	width: 30%;
	height: 850px;
	margin: 0 20px 0 20px;
	@media (max-width: 600px) {
		width: 40%;
		margin: 0 10px 0 20px;
	}
`;
const H2 = styled.h2`
	margin-top: 10px;
	margin-bottom: 10px;
`;
const P = styled.p`
	font-size: 1.1em;
	line-height: 25px;
	color: #374c58;
`;
const IMG = styled.img`
	width: 100%;
	height: auto;
`;

function CardF() {
	return (
		<Grid>
			<Card>
				<IMG src={placeholder}></IMG>
				<H2>E-commerce website brief template</H2>
				<P>A Project Brief is that essential document which defines the primary client's requirements for the project.</P>
			</Card>
			<Card>
				<IMG src={placeholder}></IMG>
				<H2>Digital Marketing Campaign brief template</H2>
				<P>
					The purpose of this digital marketing proposal is to give you a bit of information about your company and the various digital marketing
					services your offer, along with information and pricing for a custom digital marketing solution
				</P>
			</Card>
			<Card>
				<IMG src={placeholder}></IMG>
				<H2>Mobile app design and development brief template</H2>
				<P>Our software development proposal template lets you create and customize a persuasive online proposal that's sure to be signed.</P>
			</Card>
		</Grid>
	);
}
export default CardF;
