import {
	AppBar,
	Toolbar,
	Typography,
	Button,
	Box,
	IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import theme from "../theme";
import { Link } from "react-router-dom";

const NavBar = () => {
	return (
		<AppBar
			position="fixed"
			color="primary"
			sx={{
				color: theme.palette.primary.main,
			}}
		>
			<Toolbar>
				<IconButton
					size="large"
					edge="start"
					color="primary"
					aria-label="menu"
					className="nav-button"
					sx={{
						mr: 2,
						borderRadius: "10%",
						color: "white",
					}}
				>
					<MenuIcon />
				</IconButton>
				<Typography variant="h6" style={{ flexGrow: 1 }}></Typography>
				<Box display="flex" alignItems="center" gap={2} m={2}>
					<Link to="/">
						<Button size="large" variant="contained" className="nav-button">
							Home
						</Button>
					</Link>
					<Button size="large" variant="contained" className="nav-button">
						About
					</Button>
				</Box>
			</Toolbar>
		</AppBar>
	);
};

export default NavBar;
