import React, { useState } from "react";
import camera from "../assets/images/camera.svg";
import Button from "./Button";
import human from "../assets/images/human.jpg";
import arrowDown from "../assets/images/arrow-down.svg";

const Layout = () => {
	const [selectedButton, setSelectedButton] = useState(0);
	const buttons = ["Patients", "Drugs", "Pharmacy"];
	return (
		<div className="layout">
			<div className="dashboard">
				<div className="item-1">
					<img src={camera} alt="" />
					<p>University Health Services</p>
				</div>
				<div className="flex item-2">
					{buttons.map((button, index) => (
						<button key={index} className={`nav-items ${index === selectedButton ? "active" : ""}`}>
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
				this is the main page Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga laborum culpa cumque,
				veritatis dicta voluptatem adipisci, ut deleniti recusandae id harum necessitatibus minus aut ipsam libero
				magnam eveniet? Repellat sit eum tenetur veniam iste temporibus, neque expedita totam non molestiae! Rerum
				quibusdam asperiores sequi soluta expedita, nostrum error, blanditiis nam iusto repellendus voluptate adipisci
				possimus esse corrupti quos ipsa iure aliquam nulla nihil. Voluptates porro a nobis provident consequuntur
				maiores voluptas aspernatur vero earum, amet blanditiis voluptatem omnis est quis ipsa? Enim sapiente molestiae
				placeat quidem quas ipsam quaerat eligendi asperiores dicta corporis, temporibus aliquid minus consequatur velit
				facilis dolor?
			</main>
		</div>
	);
};

export default Layout;