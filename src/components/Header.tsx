import { Box, Typography } from "@mui/material";
import "@creative-fonts/harry-p";

const Header = () => {
	return (
		<Box sx={{ paddingTop: "1.5em", paddingBottom: "2em" }}>
			<Typography variant="h1" sx={{ fontFamily: "Harry P" }}>
				Welcome to Flourish and Blotts!
			</Typography>
		</Box>
	);
};

export default Header;
