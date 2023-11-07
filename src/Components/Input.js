import React from "react";
import "./Input.css";

function Input({ pincode, setLoading, setPincode, setPlace, setCountryName, setError }) {
	function getData() {
		fetch(`https://api.zippopotam.us/in/${pincode}`)
			.then((response) => {
				setLoading(true);
				if (response.ok) {
					return response.json();
				} else if (response.status === 404) {
					setError(true);
					return Promise.reject("error 404");
				} else {
					setError(true);
					return Promise.reject("some other error: " + response.status);
				}
			})
			.then((data) => {
				setError(false);
				setLoading(false);
				setCountryName(data.country);
				setPlace(data.places);
			})
			.catch((error) => {
				setError(true);
				setLoading(false);
				console.error("Error fetching data:", error);
			});
	}

	return (
		<div className="input">
			<input
				className="input__field"
				type="text"
				placeholder="Enter Zip Code"
				name="zip"
				value={pincode}
				onChange={(e) => setPincode(e.target.value.trim())}
			/>
			<button
				className="input__button"
				type="submit"
				name="submit"
				onClick={(e) => {
					e.preventDefault();
					getData();
				}}
			>
				Submit
			</button>
			<button
				className="input__button"
				type="button"
				name="clear"
				onClick={(e) => {
					e.preventDefault();
					setPincode("");
					setPlace([]);
					setError(false);
				}}
			>
				Clear
			</button>
		</div>
	);
}

export default Input;
