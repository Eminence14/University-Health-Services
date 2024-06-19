import React, { useMemo, useState } from "react";
import Card from "./Card";
import search from "../assets/images/search.svg";
import save from "../assets/images/save.svg";
import close from "../assets/images/close.svg";
import add from "../assets/images/add.svg"
import diagnosisData from "../assets/diagnosis.json";

const PatientDocLayout = () => {
	const data = useMemo(() => diagnosisData, []);
	const [selectedDiag, setSelectedDiag] = useState([]);
	function handleSelectionChange(selectedValue) {
		setSelectedDiag(selectedDiag.includes(selectedValue) ? [...selectedDiag] : [...selectedDiag, selectedValue]);
	}
	function removeDiag(e) {
		const rmParam = e.target.innerText;
		setSelectedDiag(selectedDiag.filter((param) => param !== rmParam));
	}
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
					<div className=" searchBox">
						{selectedDiag.map((diagnosis) => (
							<div className="diag-btn" key={diagnosis} onClick={(e) => removeDiag(e)}>
								{diagnosis}
								<img src={close} alt="close" className="rm-btn" />
							</div>
						))}
					</div>
					<select
						multiple={true}
						name="diagnosis"
						id="diagnosis"
						onChange={(e) => handleSelectionChange(e.target.value)}
					>
						{data.map((diagnosis) => (
							<option key={diagnosis.id} value={diagnosis.diagnosis}>
								{diagnosis.diagnosis}
							</option>
						))}
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
