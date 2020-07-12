import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
// import PreviewBody from './components/briefPreview/previewBody/PreviewBody';
// import NewTemplate from "./components/admin/NewTemplate"
// import LeafPage from "./components/leafPage/LeafPage"
// import BriefPreview from "./components/briefPreview/BriefPreview"
// import BriefTemplate from './components/briefTemplate/BriefTemplate';
// import Wizard from "./components/wizard/Wizard"

ReactDOM.render(
	<BrowserRouter>
		{/* <Wizard /> */}
		<App />
		{/* <BriefPreview /> */}
		{/* <NewTemplate /> */}
		{/* <LeafPage /> */}
		{/* <BriefTemplate /> */}
	</BrowserRouter>,
	document.getElementById("root")
);
