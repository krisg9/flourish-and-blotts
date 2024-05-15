import { Box, Typography } from "@mui/material";
import "@creative-fonts/harry-p";
import logo from "../assets/logo_fb.png";

const Header = () => {
	return (
		<Box
			sx={{
				display: "flex",
				alignItems: "center",
				paddingTop: "1.5em",
				paddingBottom: "2em",
			}}
		>
			<Typography variant="h1" sx={{ fontFamily: "Harry P", pl: "1.5em" }}>
				Welcome to Flourish and Blotts!
			</Typography>
			<img src={logo} width={200} height={200} />
		</Box>
	);
};

export default Header;
