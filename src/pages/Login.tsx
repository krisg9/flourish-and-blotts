import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Box, Button, Container, TextField, Typography } from "@mui/material";

const LogInPage = () => {
	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const { login } = useAuth();

	const handleLogin = () => {
		login({ email: email, password: password });
	};

	return (
		<Container maxWidth="xs">
			<Box
				display="flex"
				flexDirection="column"
				justifyContent="center"
				alignItems="center"
				minHeight="100vh"
			>
				<Typography variant="h4" component="h1" gutterBottom>
					MyApp
				</Typography>
				<TextField
					label="Email"
					variant="outlined"
					fullWidth
					margin="normal"
					required
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<TextField
					label="Password"
					type="password"
					variant="outlined"
					fullWidth
					margin="normal"
					required
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
				<Button
					variant="contained"
					color="primary"
					fullWidth
					onClick={handleLogin}
					style={{ marginTop: "16px" }}
				>
					Login
				</Button>
			</Box>
		</Container>
	);
};

export default LogInPage;
