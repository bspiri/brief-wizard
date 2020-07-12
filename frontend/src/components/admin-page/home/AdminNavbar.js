import React from "react";

import "./AdminNavbar.css";

const Navbar = () => {
	const mobileMenu = () => {
		var x = document.getElementById("myTopnav");
		if (x.className === "topnav") {
			x.className += " responsive";
		} else {
			x.className = "topnav";
		}
	};

	return (
		<div className="topnav" id="myTopnav">
			<a href="#home" id="left" class="active">
				SuperOkay
			</a>
			<div>
				<a href="http://localhost:3000/">Dashboard</a>
				<a href="http://localhost:3000/">Categories</a>
				<a href="http://localhost:3000/">Brief Templates</a>
				<a href="http://localhost:3000/">Users</a>
				<a href="http://localhost:3000/">Sign Out</a>
			</div>
			<a href="#" class="icon" onClick={mobileMenu}>
				<i className="fa fa-bars"></i>
			</a>
		</div>
	);
};

export default Navbar;
