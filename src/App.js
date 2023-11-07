import { useState } from "react";
import "./App.css";
import Input from "./Components/Input";
import Loader from "./Components/Loader";
import Information from "./Components/Information";

function App() {
	const [pincode, setPincode] = useState("");
	const [place, setPlace] = useState([]);
	const [countryName, setCountryName] = useState("");
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);

	return (
		<div className="app">
			<div className="container">
				<h1>Zip Code Information</h1>
				<div className="containter__input">
					<Input
						pincode={pincode}
						setLoading={setLoading}
						setPincode={setPincode}
						setPlace={setPlace}
						setCountryName={setCountryName}
						setError={setError}
					/>
					{loading ? <Loader /> : <Information place={place} countryName={countryName} error={error} />}
				</div>
			</div>
		</div>
	);
}

export default App;
