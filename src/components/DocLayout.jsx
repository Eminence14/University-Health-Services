import React from "react";

import Table from "./Table";

const DocLayout = () => {
	return (
		<div className="doclayout">
			<div className="header">
				<h2>Patient List</h2>
				<h4>Welcome Doc!</h4>
				<p>Manage your patients and their health status</p>
			</div>
			<div className="body">
				
				<div className="table">
					<Table />
				</div>
			</div>
		</div>
	);
};

export default DocLayout;
