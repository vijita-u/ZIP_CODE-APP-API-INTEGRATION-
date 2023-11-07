import React from "react";
import "./Information.css";
import Error from "./Error";

function Information({ place, countryName, error }) {
	return (
		<>
			{error ? (
				<Error />
			) : (
				<div className="information">
					{place &&
						place.map((place, index) => {
							return (
								<div className="information__container" key={index}>
									<h5 className="information__place">{place["place name"]}</h5>
									<h4 className="information__state">{place["state"]}</h4>
									<h3 className="information__country">{countryName}</h3>
								</div>
							);
						})}
				</div>
			)}
		</>
	);
}

export default Information;
