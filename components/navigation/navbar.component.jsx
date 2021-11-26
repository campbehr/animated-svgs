import React, { useState } from "react";
import Image from "next/image";

const NavBar = ({ darkMode, setDarkMode }) => {
	return (
		<nav
			className="navbar"
			style={{
				width: "100vw",
				height: "5rem",
				display: "flex",
				justifyContent: "space-between",
				backgroundColor: "black",
			}}
		>
			<div
				className="left-nav"
				style={{
					height: "100%",
					width: "50%",
					display: "flex",
					alignItems: "center",
				}}
			>
				<div className="logo-container">
					<Image
						className="logo"
						src="/logo.svg"
						alt="svg(s)"
						width="150px"
						height="50px"
					/>
				</div>
			</div>
			<div
				className="right-nav"
				style={{
					height: "100%",
					width: "50%",
					display: "flex",
					alignItems: "center",
					justifyContent: "end",
				}}
			>
				<button
					onClick={() => {
						setDarkMode(!darkMode);
					}}
				>
					darkMode
				</button>
			</div>
		</nav>
	);
};

export default NavBar;
