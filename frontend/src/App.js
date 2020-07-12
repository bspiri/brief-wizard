import React from "react";
import BriefPreview from "./components/briefPreview/BriefPreview";
import BriefTemplate from "./components/briefTemplate/BriefTemplate";
import NewCategory from "./components/admin-page/new-category/NewCategory";
import Leafpage from "./components/leafPage/LeafPage";
import { Route, Switch } from "react-router-dom";
import LandingPage from "./components/landing-page/LandingPage";
import Wizard from "./components/wizard/Wizard";
// import Questions from "./components/wizard/Questions";
import NewTemplate from "./components/admin-page/new-template/NewTemplate";
import AdminHome from "./components/admin-page/home/AdminHome";
import EmailNavbar from "./components/wizard/EmailNavbar";
import NewQuestion from "./components/admin-page/new-question/NewQuestion";

const routes = [
	{
		path: "/template/:id",
		component: BriefTemplate,
	},
	{
		path: "/template/:id/wizard",
		component: Wizard,
	},
	{
		path: "/template/:id/wizard/preview",
		component: BriefPreview,
	},
	{
		path: "/template/:id/wizard/preview/brief",
		component: Leafpage,
	},

	// {
	// 	path: "/template/:id/wizard/:question",
	// 	component: Questions,
	// },
	{
		path: "/admin/dashboard",
		component: AdminHome,
	},
	{
		path: "/admin/newcategory",
		component: NewCategory,
	},
	{
		path: "/admin/newtemplate",
		component: NewTemplate,
	},
	{
		path: "/admin/newquestion",
		component: NewQuestion,
	},

	{
		path: "/",
		component: LandingPage,
	},
];

function App() {
	return (
		<div>
			<Switch>
				{routes.map((el) => (
					<Route exact path={el.path} render={(props) => <el.component {...props} />} />
				))}
			</Switch>
		</div>
	);
}

export default App;
