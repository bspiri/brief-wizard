import React from "react";
// import styled from "styled-components";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import "./EmailNavbar.css";

// const Wrapper = styled.div`
// 	background: #f8f8f8;
// 	padding: 20px;
// `;

// const UL = styled.ul`
// 	list-style-type: none;
// 	float: right;
// `;

// const LI = styled.li`
// 	display: inline;
// 	position: relative;
// 	top: 10px;
// 	margin-right: 50px;
// 	color: #374c58;
// `;

// const H1 = styled.h1`
// 	display: inline;
// `;

// const A = styled.a`
// 	text-decoration: none;
// 	color: #232733;
// `;

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
				<a href="#email">client@clientemail.com</a>
				<a id="hamburger" href="#email">
					<IconButton className="floatRight">
						<MenuIcon />
					</IconButton>
				</a>
			</div>
			<a href="javascript:void(0);" class="icon" onClick={mobileMenu}>
				<i className="fa fa-bars"></i>
			</a>
		</div>
		// <Wrapper className="desktop-nav">
		// 	<H1>SuperOkay</H1>
		// 	<UL>
		// 		<LI>
		// 			<A href="#">All Brief Templates</A>
		// 		</LI>
		// 		<LI>
		// 			<A href="#">Design</A>
		// 		</LI>
		// 		<LI>
		// 			<A href="#">Software</A>
		// 		</LI>
		// 		<LI>
		// 			<A href="#">Marketing</A>
		// 		</LI>
		// 		<LI>
		// 			<A href="#">Sales</A>
		// 		</LI>
		// 		<LI>
		// 			<A href="#">Agency</A>
		// 		</LI>
		// 		<LI>
		// 			<A href="#">Consulting</A>
		// 		</LI>
		// 	</UL>
		// </Wrapper>
	);
};

export default Navbar;
