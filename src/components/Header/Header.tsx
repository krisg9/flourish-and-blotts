import { Box, Typography } from "@mui/material";
import React from "react";
import "@creative-fonts/harry-p";

function Header() {
	return (
		<Box sx={{ paddingTop: "20px", paddingBottom: "50px" }}>
			<Typography variant="h1" sx={{ fontFamily: "Harry P" }}>
				Welcome to Flourish and Blotts!
			</Typography>
		</Box>
	);
}

export default Header;
