import React from "react";

const PatientDocLayout = () => {
	return (
		<div className="patient-doc-layout">
			<div className="header">
				<h2>Ibidunmoye Victor</h2>
				<h4>Manage your patients and their health status</h4>
				<ul>
					<li>Complaints</li>
					<li>Diagnosis</li>
					<li>Prescription</li>
				</ul>
			</div>
			<div className="body">
				<div className="table">{/* <Table /> */}</div>
			</div>
		</div>
	);
};

export default PatientDocLayout;
