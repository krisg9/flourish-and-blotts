import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import {
	Alert,
	Box,
	Button,
	Container,
	FormControl,
	FormHelperText,
	Snackbar,
	TextField,
} from "@mui/material";

const LogInPage = () => {
	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const [emailError, setEmailError] = useState<string | null>(null);
	const [passwordError, setPasswordError] = useState<string | null>(null);
	const [snackbarOpen, setSnackbarOpen] = useState<boolean>(false);
	const [snackbarMessage, setSnackbarMessage] = useState<string>("");
	const { login } = useAuth();

	const validateEmail = (email: string) => {
		const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return re.test(email);
	};

	const handleLogin = async () => {
		setEmailError(null);
		setPasswordError(null);

		if (!validateEmail(email)) {
			setEmailError("Please enter a valid email address.");
			return;
		}

		if (password === "") {
			setPasswordError("Password cannot be empty.");
			return;
		}

		try {
			await login({ email: email, password: password });
		} catch (error) {
			setSnackbarMessage("Invalid email or password.");
			setSnackbarOpen(true);
		}
	};

	const handleClose = (
		event: React.SyntheticEvent | Event,
		reason?: string,
	) => {
		if (reason === "clickaway") {
			return;
		}

		setSnackbarOpen(false);
	};

	return (
		<Container maxWidth="xs" sx={{ marginY: "4em" }}>
			<Box
				display="flex"
				flexDirection="column"
				justifyContent="center"
				alignItems="center"
			>
				<FormControl fullWidth margin="normal" error={Boolean(emailError)}>
					<TextField
						label="Email"
						variant="outlined"
						fullWidth
						required
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						error={Boolean(emailError)}
					/>
					{emailError && <FormHelperText>{emailError}</FormHelperText>}
				</FormControl>
				<FormControl fullWidth margin="normal" error={Boolean(passwordError)}>
					<TextField
						label="Password"
						type="password"
						variant="outlined"
						fullWidth
						required
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						error={Boolean(passwordError)}
					/>
					{passwordError && <FormHelperText>{passwordError}</FormHelperText>}
				</FormControl>
				<Button
					variant="contained"
					color="primary"
					size="large"
					fullWidth
					onClick={handleLogin}
					style={{ marginTop: "16px" }}
				>
					Login
				</Button>
			</Box>
			<Snackbar
				open={snackbarOpen}
				autoHideDuration={6000}
				onClose={handleClose}
				anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
			>
				<Alert
					severity="error"
					sx={{ fontSize: "20px", width: "100%" }}
					onClose={handleClose}
				>
					{snackbarMessage}
				</Alert>
			</Snackbar>
		</Container>
	);
};

export default LogInPage;
