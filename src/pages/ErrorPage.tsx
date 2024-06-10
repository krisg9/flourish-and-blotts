import { Link, isRouteErrorResponse, useRouteError } from "react-router-dom";
import {
	Alert,
	AlertTitle,
	Box,
	Button,
	Stack,
	Typography,
} from "@mui/material";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

const ErrorPage = () => {
	const error = useRouteError();
	const errorMessage = isRouteErrorResponse(error)
		? error.statusText
		: error instanceof Error
			? error.message
			: "An unknown error ocurred.";

	return (
		<>
			<Box
				display="flex"
				justifyContent="center"
				alignItems="center"
				height="100%"
			>
				<Alert
					icon={<ErrorOutlineIcon sx={{ fontSize: "60px" }} />}
					severity="error"
					style={{
						width: "60%",
						justifyContent: "center",
						marginTop: "2em",
						marginBottom: "2em",
						borderRadius: "2em",
					}}
				>
					<AlertTitle sx={{ fontSize: "80px" }}>Oops...</AlertTitle>
					<Stack sx={{ gap: "2em" }}>
						<Typography variant="h5">Something went wrong!</Typography>
						<Typography variant="h5">{errorMessage}</Typography>
					</Stack>
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
		</>
	);
};

export default ErrorPage;
