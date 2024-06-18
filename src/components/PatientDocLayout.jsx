import React from "react";
import Card from "./Card";
import search from "../assets/images/search.svg";
import save from "../assets/images/save.svg";

const PatientDocLayout = () => {
	return (
		<div className="patient-doc-layout">
			<section className="header">
				<h2>Ibidunmoye Victor</h2>
				<h4>Manage your patients and their health status</h4>
				<ul>
					<li>Complaints</li>
					<li>Diagnosis</li>
					<li>Prescription</li>
				</ul>
			</section>
			<div className="body">
				<section className="cards">
					<Card heading="Gender" body="Male" />
					<Card heading="Phone number" body="080987654321" />
					<Card heading="UHS Number" body="542/16" />
				</section>
				<section className="mini-capsule diagnosis">
					<h4>Diagnosis</h4>
					<div className="searchBox">
						<img src={search} alt="" />
						<input type="text" placeholder="Search" />
					</div>
					<select name="diagnosis" id="diagnosis">
						<option value="1">ffyufuf</option>
						<option value="2">ufujvjj</option>
						<option value="3">cxhctu</option>
					</select>
				</section>
				<section className="mini-capsule prescription">
					<h4>Prescription</h4>
					<div className="searchBox">
						<img src={search} alt="" />
						<input type="text" placeholder="Search" />
					</div>
				</section>

				{/* save button */}
				<div className="save">
					Save
					<img src={save} alt="" />
				</div>
			</div>
		</div>
	);
};

export default PatientDocLayout;
