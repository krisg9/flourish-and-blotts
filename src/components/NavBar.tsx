import {
	AppBar,
	Toolbar,
	Typography,
	Button,
	IconButton,
	Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const NavBar = () => {
	return (
		<AppBar position="fixed">
			<Toolbar>
				<IconButton size="large" edge="start" color="inherit" aria-label="menu">
					<MenuIcon />
				</IconButton>
				<Typography variant="h6" style={{ flexGrow: 1 }}></Typography>
				<Box display="flex" alignItems="center" gap={2} m={2}>
					<Button size="large" variant="contained" color="primary">
						Home
					</Button>
					<Button size="large" variant="contained" color="primary">
						About
					</Button>
				</Box>
			</Toolbar>
		</AppBar>
	);
};

export default NavBar;
