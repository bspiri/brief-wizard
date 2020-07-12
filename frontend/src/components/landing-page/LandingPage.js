import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Banner from "./Banner";
import Content from "./Content";
import Description from "./Description";
import CallToAction from "./CallToAction";
import Categories from "./Categories";
import draftToHtml from "draftjs-to-html";


const homeContent = {
	name: "home",
	title: "Free project brief templates for freelancers and agencies",
	subtitle:
		"Included on this page, you'll find a definition of creative briefs, steps on how to write a creative brief, best practices for creating a creative brief, as well as free, downloadable creative brief templates.",
};

const LandingPage = () => {
	const [categories, setCategories] = useState([]);
	const [templates, setTemplates] = useState([]);
	const [currentCategory, setCurrentCategory] = useState(homeContent);

	useEffect(() => {
		fetch("/admins/templates")
			.then((res) => res.json())
			.then((data) => {

				setTemplates(data);
			});
		fetch("/admins/categories")
			.then((res) => res.json())
			.then((data) => {

				setCategories(data);
			});

	}, []);

	const displayCategory = (category) => {
		if (category === "home") {
			setCurrentCategory(homeContent);
		} else {
			categories.map((item) => {
				if (item.name === category) {
					setCurrentCategory(item);
				}
			});
		}
	};

	return (
		<div>
			<Navbar displayCategory={displayCategory} />
			<Banner
				subtitle={typeof currentCategory.subtitle == "string" ? currentCategory.subtitle : draftToHtml(currentCategory.subtitle)}
				title={currentCategory.title}
			/>
			<Content currentCategory={currentCategory} templates={templates} displayCategory={displayCategory} />
			<Description content={draftToHtml(currentCategory.content)} />
			<CallToAction />
			<Categories displayCategory={displayCategory} />
		</div>
	);
};

export default LandingPage;
