import React from "react";
import "./Error.css";

function Error() {
	return (
		<div className="error">
			<span>
				<strong>Oops 💀 could not fetch data. Try entering a valid zip code!</strong>
			</span>
		</div>
	);
}

export default Error;
