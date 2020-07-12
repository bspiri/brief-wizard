import React, { useState, useEffect } from "react";
import styled from "styled-components";
import placeholder from "./placeholder-image.jpg";
import { Link } from "react-router-dom";
import axios from "axios";
import draftToHtml from "draftjs-to-html";

const Wrapper = styled.div`
	display: flex;
	height: 100%;
	@media (max-width: 600px) {
		flex-direction: column;
	}
`;
const Sidebar = styled.div`
	width: 20%;
	height: 100%;
	margin-left: 5%;
	@media (max-width: 600px) {
		width: 100%;
		text-align: center;
		margin-left: 0;
		margin-bottom: 30px;
	}
`;

const Grid = styled.div`
	display: flex;
	width: 100%;
	flex-wrap: wrap;
	@media (max-width: 600px) {
		display: flex;
		justify-content: center;
	}
`;

const Card = styled.div`
	display: inline-block;
	width: 30%;
	text-decoration: none;
	margin: 0 20px 30px 20px;
	@media (max-width: 600px) {
		width: 40%;
		margin: 0 10px 20px 10px;
	}
`;

const H3 = styled.h3`
	margin-bottom: 30px;
`;

const H2 = styled.h2`
	margin-top: 10px;
	margin-bottom: 10px;
	margin-left: 0px;
	@media (max-width: 600px) {
		font-size: 1em;
	}
`;

const UL = styled.ul`
	list-style-type: none;
	@media (max-width: 600px) {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
	}
`;

const LI = styled.li`
	color: #374c58;
	font-size: 1.1em;
	margin-bottom: 20px;
	@media (max-width: 600px) {
		display: inline;
		margin: 5px 10px 5px 10px;
	}
`;

const A = styled.a`
	text-decoration: none;
	color: #232733;
`;

const IMG = styled.img`
	width: 100%;
	height: auto;
`;

const P = styled.p`
	font-size: 1.1em;
	line-height: 25px;
	color: #374c58;
	@media (max-width: 600px) {
		font-size: 0.9em;
		line-height: 20px;
	}
`;

const Content = (props) => {
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
			<Sidebar>
				<H3>Project brief templates</H3>
				<UL>
					<LI>
						<A onClick={() => props.displayCategory("home")} href="#">
							All Brief Templates
						</A>
					</LI>
					{categories.length > 0 &&
						categories.map((item) => (
							<LI>
								<A onClick={() => props.displayCategory(item.name)} href="#">
									{item.name}
								</A>
							</LI>
						))}
				</UL>
			</Sidebar>
			<Grid>
				{props.currentCategory.name == "home"
					? props.templates.map((item) => {
							return (
								<Card as={Link} to={`/template/${item._id}`}>
									<IMG src={placeholder}></IMG>
									<H2>{item.name}</H2>
									<P dangerouslySetInnerHTML={{ __html: draftToHtml(item.subtitle) }}></P>
								</Card>
							);
					  })
					: props.templates.map((item) => {
							if (item.category.includes(props.currentCategory.name)) {
								return (
									<Card as={Link} to={`/template/${item._id}`}>
										<IMG src={placeholder}></IMG>
										<H2>{item.name}</H2>
										<P dangerouslySetInnerHTML={{ __html: draftToHtml(item.subtitle) }}></P>
									</Card>
								);
							}
					  })}
			</Grid>
		</Wrapper>
	);
};

export default Content;
