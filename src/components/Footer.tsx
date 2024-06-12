import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

function Copyright() {
	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "row",
				alignItems: "center",
				justifyContent: "center",
				paddingY: 4,
				gap: 2,
			}}
		>
			<Typography>Copyright ©</Typography>
			<Link to="https://github.com/krisg9/flourish-and-blotts">
				Flourish and Blotts
			</Link>
			<Typography>{new Date().getFullYear()}.</Typography>
			<Link to="/about">About Us</Link>
		</Box>
	);
}

export default function Footer() {
	return <Copyright />;
}
