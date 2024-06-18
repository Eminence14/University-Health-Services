import "./App.css";
import "./mobile.css";
import Login from "./components/Login";
import Layout from "./components/Layout";
import { Route, Routes } from "react-router-dom";
import PatientDetails from "./components/PatientDetails";
import data from "../src/assets/data.json";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Layout />} />
				<Route path="/login" element={<Login />} />
				<Route path="/patients/:id" element={<PatientDetails data={data} />} />
			</Routes>
		</div>
	);
}

export default App;
