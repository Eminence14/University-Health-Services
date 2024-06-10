import React, { useState } from "react";
import camera from "../assets/images/camera.svg";
import human from "../assets/images/human.jpg";
import arrowDown from "../assets/images/arrow-down.svg";
import DocLayout from "./DocLayout";

const Layout = () => {
	const [selectedButton, setSelectedButton] = useState(0);
	const buttons = ["Patients", "Drugs", "Pharmacy"];
	function handleClick(index) {
		if (selectedButton === index) {
			return;
		}
		setSelectedButton(index);
	}
	return (
		<div className="layout">
			<div className="dashboard">
				<div className="item-1">
					<img src={camera} alt="" />
					<p>University Health Services</p>
				</div>
				<div className="flex item-2">
					{buttons.map((button, index) => (
						<button
							key={index}
							className={`nav-items ${index === selectedButton ? "active" : ""}`}
							onClick={() => handleClick(index)}
						>
							{button}
						</button>
					))}
				</div>
				<div className="flex nav-footer item-3">
					<img className="profile-img" src={human} alt="" />
					<div>
						<p className="nav-footer-name">Ibidunmoye Victor</p>
						<p>University Health Services</p>
					</div>
					<img src={arrowDown} alt="" />
				</div>
			</div>
			<main>
				<DocLayout />
			</main>
		</div>
	);
};

export default Layout;
