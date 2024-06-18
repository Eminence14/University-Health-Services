import React from "react";

const Card = ({ heading, body }) => {
	return (
		<div className="card">
			<h5>{heading}</h5>
			<div>{body}</div>
		</div>
	);
};

export default Card;
