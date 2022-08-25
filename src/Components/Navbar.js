import React from "react";
import "./Navbar.css";
import logo from "./logo-small.jpeg";
import { Box, Grid, TextField, Typography } from "@mui/material";

function Navbar() {
	return (
		<Grid>
			<Grid>
				<img
					src={logo}
					alt="logo"
					className="logo"
					height={250}
					width={250}></img>
			</Grid>
			<Box m={4}></Box>
			<FilterField name="Petitioner" />
			<FilterField name="Respondent" />
			<FilterField name="Section" />
		</Grid>
	);
}

function FilterField({ name, ...props }) {
	return (
		<Grid>
			<Grid item>
				<Typography>{name}</Typography>
			</Grid>
			<Grid item>
				<TextField
					inputProps={{
						style: {
							padding: 5,
						},
					}}
					id="outlined-basic"
					variant="outlined"
				/>
			</Grid>
		</Grid>
	);
}

export default Navbar;
