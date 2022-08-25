import { Grid } from "@mui/material";
import React from "react";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import "./home.css";
import Navbar from "./Navbar";
function Home() {
	const items = [
		{
			id: 0,
			name: "Cobol",
		},
		{
			id: 1,
			name: "JavaScript",
		},
		{
			id: 2,
			name: "Basic",
		},
		{
			id: 3,
			name: "PHP",
		},
		{
			id: 4,
			name: "Java",
		},
	];
	const handleOnSearch = (string, results) => {
		console.log(string, results);
	};

	const handleOnHover = (result) => {
		console.log(result);
	};

	const handleOnSelect = (item) => {
		console.log(item);
	};

	const handleOnFocus = () => {
		console.log("Focused");
	};

	const handleOnClear = () => {
		console.log("Cleared");
	};

	const formatResult = (item) => {
		console.log(item);
		return (
			<div className="result-wrapper">
				<span className="result-span">id: {item.id}</span>
				<span className="result-span">name: {item.name}</span>
			</div>
		);
	};
	return (
		<div className="App" style={{ height: "100%", width: "100%" }}>
			<Grid
				container
				spacing={2}
				columns={12}
				style={{ padding: "24px" }}>
				<Grid item md={3}>
					<Navbar />
				</Grid>
				<Grid item md={5}>
					<div style={{ marginTop: "30vh" }}>
						<h1 style={{ textAlign: "center", fontSize: "3rem" }}>
							J Search
						</h1>
						<ReactSearchAutocomplete
							items={items}
							onSearch={handleOnSearch}
							onHover={handleOnHover}
							onSelect={handleOnSelect}
							onFocus={handleOnFocus}
							onClear={handleOnClear}
							formatResult={formatResult}
							styling={{ zIndex: 4 }} // To display it on top of the search box below
							autoFocus
						/>
					</div>
				</Grid>
			</Grid>
		</div>
	);
}

export default Home;
