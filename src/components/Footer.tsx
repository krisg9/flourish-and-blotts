import { Box, Link, Typography } from "@mui/material";

function Copyright() {
	return (
		<Box sx={{ paddingTop: "20px", paddingBottom: "20px" }}>
			<Typography variant="body2" color="primary.main">
				{"Copyright © "}
				<Link
					color="inherit"
					href="https://github.com/krisg9/flourish-and-blotts"
				>
					Flourish and Blotts
				</Link>{" "}
				{new Date().getFullYear()}
				{"."}
			</Typography>
		</Box>
	);
}

export default function Footer() {
	return <Copyright />;
}
