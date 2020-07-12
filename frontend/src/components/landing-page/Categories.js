import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
	padding: 50px 15% 50px 15%;
	text-align: center;
	height: 370px;
	@media (max-width: 600px) {
		padding: 0px 5% 20px 5%;
	}
`;

const H1 = styled.h1`
	font-size: 3em;
	font-weight: 800;
	margin-bottom: 50px;
	@media (max-width: 600px) {
		font-size: 1.5em;
	}
`;

const RoundButton = styled.button`
	color: #398af7;
	background: white;
	border: 1px solid #e3e4e8;
	border-radius: 25px;
	font-size: 1.2em;
	cursor: pointer;
	font-weight: 700;
	padding-left: 20px;
	padding-right: 20px;
	height: 55px;
	margin: 10px;
	@media (max-width: 600px) {
		font-size: 0.9em;
		font-weight: 700;
		padding-left: 10px;
		padding-right: 10px;
		height: 45px;
		margin: 10px;
	}
	:hover {
		background: #f8f8f8;
	}
`;

const Button = styled.button`
	width: 140px;
	height: 45px;
	font-size: 1.1em;
	font-weight: 600;
	border: none;
	background: #398af7;
	color: white;
	border-radius: 5px;
	margin-top: 50px;
	margin-bottom: 300px;
	cursor: pointer;
`;

const Categories = (props) => {
	const [categories, setCategories] = useState([]);

	useEffect(() => {
		fetch("/admins/categories")
			.then((res) => res.json())
			.then((data) => {
				setCategories(data);
			});
	}, []);

	return (
		<Wrapper>
			<H1>Explore other project brief templates</H1>
			{categories.length > 0 && categories.map((item) => <RoundButton onClick={() => props.displayCategory(item.name)}>{item.name}</RoundButton>)}

			<div>
				<Button>View More</Button>
			</div>
		</Wrapper>
	);
};

export default Categories;
