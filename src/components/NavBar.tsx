import { AppBar, Toolbar, Button, Box } from "@mui/material";
import theme from "../theme";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import { useAuth } from "../context/AuthContext";

const NavBar = () => {
	const { role, logout, isAuthenticated } = useAuth();

	return (
		<AppBar
			position="fixed"
			color="primary"
			sx={{
				color: theme.palette.primary.main,
			}}
		>
			<Toolbar sx={{ justifyContent: "center" }}>
				<Box display="flex" alignItems="center" gap={2} m={2}>
					{role === "admin" ? (
						<Link to={"/book/add"}>
							<Button size="large" variant="contained" className="nav-button">
								Add Book
							</Button>
						</Link>
					) : (
						<></>
					)}
					<Link to="/">
						<Button size="large" variant="contained" className="nav-button">
							<HomeIcon />
						</Button>
					</Link>
					<Link to="/about">
						<Button size="large" variant="contained" className="nav-button">
							About
						</Button>
					</Link>
					{isAuthenticated ? (
						<Link to="/login">
							<Button
								size="large"
								variant="contained"
								className="nav-button"
								onClick={() => logout()}
							>
								Logout
							</Button>
						</Link>
					) : (
						<></>
					)}
				</Box>
			</Toolbar>
		</AppBar>
	);
};

export default NavBar;
