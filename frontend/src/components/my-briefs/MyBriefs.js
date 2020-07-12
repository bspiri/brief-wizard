import React from "react";
import styled from "styled-components";
import EmailNavbar from "./EmailNavbar.js";
import CallToAction from "./CallToAction";
import Categories from "../landing-page/Categories";
import BriefBlock from "./BriefBlock";

const Wrapper = styled.div`
	background: #f8f8f8;
	padding: 100px 10% 20px 10%;
	margin-bottom: 50px;
	@media (max-width: 600px) {
		text-align: center;
		padding: 100px 6% 20px 6%;
	}
`;

const H1 = styled.h1`
	font-size: 3.5em;
	font-weight: 700;
	margin-bottom: 60px;
	color: #232733;
	display: inline-block;
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
	margin-bottom: 50px;
	float: right;
	@media (max-width: 600px) {
		float: none;
	}
`;

const MyBriefs = () => {
	return (
		<div>
			<EmailNavbar />
			<Wrapper>
				<H1>My Briefs</H1>
				<Button>Create a new brief</Button>
				<BriefBlock />
			</Wrapper>
			<CallToAction />
			<Categories />
		</div>
	);
};

export default MyBriefs;
