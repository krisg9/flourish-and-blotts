import { Link, useRouteError } from "react-router-dom";
import { Alert, Box, Button, Typography } from "@mui/material";

const ErrorPage = () => {
	const error = useRouteError();
	console.error(error);

	return (
		<div>
			<Box
				display="flex"
				justifyContent="center"
				alignItems="center"
				height="100%"
			>
				<Alert
					severity="error"
					style={{
						width: "50%",
						justifyContent: "center",
						marginTop: "2em",
						marginBottom: "2em",
					}}
				>
					<Typography variant="h3">Oops!</Typography>
					<Typography variant="h5">Something went wrong!</Typography>
					<Link to="/">
						<Button
							size="large"
							color="error"
							variant="contained"
							style={{ margin: "2em" }}
						>
							Home
						</Button>
					</Link>
				</Alert>
			</Box>
		</div>
	);
};

export default ErrorPage;
