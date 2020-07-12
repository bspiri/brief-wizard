import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
	background: #f8f8f8;
	padding: 100px 20% 20px 20%;
	text-align: center;
	margin-bottom: 50px;
	@media (max-width: 600px) {
		padding: 50px 5% 20px 5%;
	}
`;

const H1 = styled.h1`
	font-size: 3.5em;
	font-weight: 800;
	margin-bottom: 40px;
	color: #232733;
	@media (max-width: 600px) {
		font-size: 2em;
	}
`;

const P = styled.p`
	font-size: 1.4em;
	color: #374c58;
	line-height: 35px;
	margin-bottom: 50px;
	@media (max-width: 600px) {
		font-size: 1.1em;
		line-height: 25px;
	}
`;

const Button = styled.button`
	width: 250px;
	height: 45px;
	font-size: 1.1em;
	font-weight: 600;
	border: none;
	background: #398af7;
	color: white;
	border-radius: 5px;
	margin-right: 20px;
	margin-bottom: 50px;
	cursor: pointer;
	@media (max-width: 600px) {
		margin-right: 0px;
		margin-bottom: 20px;
	}
`;

const Button2 = styled.button`
	width: 250px;
	height: 45px;
	font-size: 1.1em;
	font-weight: 600;
	border: none;
	cursor: pointer;
	background: #dfe0e5;
	color: #454d69;
	border-radius: 5px;
`;

const Banner = (props) => {
	return (
		<Wrapper>
			<H1>{props.title}</H1>
			<P dangerouslySetInnerHTML={{ __html: props.subtitle }}></P>
			<Button>Explore Brief Templates</Button>
			<Button2>View a sample brief</Button2>
		</Wrapper>
	);
};

export default Banner;
