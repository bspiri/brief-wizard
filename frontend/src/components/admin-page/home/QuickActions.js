import React from "react";
import styled from "styled-components";

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
	@media (max-width: 600px) {
		margin-right: 0px;
		margin-bottom: 20px;
	}
`;

export default function QuickActions(props) {
	const linkTemplate = () => props.history.push(`/admin/newtemplate`)
	const linkCategory = () => props.history.push(`/admin/newcategory`)
	return (
		<div className="container1">
			<div className="padding">
				<h3>Quick Actions</h3>

				<div className="container2">
					<Button onClick={linkTemplate}>Create New Template</Button>
					<Button onClick={linkCategory}>Create New Category</Button>
				</div>
			</div>
		</div>
	);
}
