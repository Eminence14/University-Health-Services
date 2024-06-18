import React from "react";
import { useParams } from "react-router-dom";

const PatientDetails = ({ data }) => {
	const { id } = useParams();
	const rowData = data.find((row) => row.id === Number(id));
	return (
		<div className="patient-details">
			{rowData ? (
				<>
					<h1>Details for {rowData.id}</h1>
					<p>{rowData.details}</p>
				</>
			) : (
				<p>Row not found</p>
			)}
		</div>
	);
};

export default PatientDetails;
