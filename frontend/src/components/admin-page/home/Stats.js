import React from "react";
import "./Stats.css";

export default function Stats() {
	return (
		<div className="container1">
			<div className="padding">
				<h3>Content</h3>
				<div className="container2">
					<div className="wrapper ">
						<p className="marginBottom stat-title">BRIEF TEMPLATES</p>
						<p className="number marginBottom">87</p>
						<a className="link" href="asdf">
							View Templates
						</a>
					</div>
					<div className="wrapper">
						<p className="marginBottom stat-title">TEMPLATE CATEGORIES</p>
						<p className="number marginBottom">8</p>
						<a className="link" href="asdf">
							View Categories
						</a>
					</div>
				</div>
			</div>
			<div className="padding">
				<h3>Usage</h3>
				<div className="container2">
					<div className="wrapper ">
						<p className="marginBottom stat-title">USERS SIGNED UP</p>
						<p className="number marginBottom">768</p>
						<a className="link" href="asdf">
							View Users
						</a>
					</div>
					<div className="wrapper">
						<p className="marginBottom stat-title">FILLED IN BRIEFS</p>
						<p className="number marginBottom">2,768</p>
						<a className="link" href="asdf">
							View Details
						</a>
					</div>
					<div className="wrapper">
						<p className="marginBottom stat-title">VIEWS ON SHARED LINKS</p>
						<p className="number marginBottom">82,768</p>
						<a className="link" href="asdf">
							View Details
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
