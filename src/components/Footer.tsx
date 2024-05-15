import { Box, Link, Typography } from "@mui/material";
import theme from "../theme";

function Copyright() {
	return (
		<Box
			sx={{
				py: "2em",
				color: theme.palette.primary.main,
			}}
		>
			<Typography variant="body2">
				{"Copyright © "}
				<Link href="https://github.com/krisg9/flourish-and-blotts">
					Flourish and Blotts
				</Link>{" "}
				{new Date().getFullYear()}
				{". "}
				<Link mx={2}>About Us</Link> <Link mx={2}>Legal Notice</Link>{" "}
			</Typography>
		</Box>
	);
}

export default function Footer() {
	return <Copyright />;
}