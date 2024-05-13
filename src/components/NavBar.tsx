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

const NavBar = () => {
	return (
		<AppBar
			position="fixed"
			color="primary"
			sx={{
				color: theme.palette.primary.main,
				".nav-button": {
					my: 0.8,
					display: "block",
				},
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
					<Button size="large" variant="contained" className="nav-button">
						Home
					</Button>
					<Button size="large" variant="contained" className="nav-button">
						About
					</Button>
				</Box>
			</Toolbar>
		</AppBar>
	);
};

export default NavBar;
