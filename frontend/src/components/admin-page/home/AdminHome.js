import React from "react";
import AdminNavbar from "./AdminNavbar";
import Stats from "./Stats";
import QuickActions from "./QuickActions";

export default function AdminHome(props) {
	//props to send to the QuickActions for the Link router
	let propsToSend = {
		history: props.history
	}
	return (
		<div>
			<AdminNavbar />
			<div>
				<h1>Brief Creator Dashboard</h1>
			</div>
			<Stats />
			<QuickActions {...propsToSend} />
		</div>
	);
}
