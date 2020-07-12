import React, { useState, useEffect } from "react";
import "./Navbar.css";

const Navbar = (props) => {
	const [categories, setCategories] = useState([]);

	useEffect(() => {
		fetch("/admins/categories")
			.then((res) => res.json())
			.then((data) => {
				setCategories(data);
			});
	}, []);

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
				<a onClick={() => props.displayCategory("home")} href="#">
					All Brief Templates
				</a>
				{categories.length > 0 &&
					categories.map((item) => (
						<a className="navbarCategories" onClick={() => props.displayCategory(item.name)} href="#">
							{item.name}
						</a>
					))}
			</div>
			<a href="javascript:void(0);" class="icon" onClick={mobileMenu}>
				<i className="fa fa-bars"></i>
			</a>
		</div>
	);
};

export default Navbar;
