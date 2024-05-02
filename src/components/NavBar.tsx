import {
	AppBar,
	Toolbar,
	Typography,
	Button,
	IconButton,
	Box,
	styled,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import theme from "../theme";

const StyledAppBar = styled(AppBar)({
	".nav-button": {
		backgroundColor: theme.palette.secondary.light,
		"&:hover": {
			backgroundColor: theme.palette.secondary.main,
		},
		color: "#FFFFF",
	},
});

const NavBar = () => {
	return (
		<StyledAppBar position="fixed">
			<Toolbar>
				<IconButton size="large" edge="start" color="inherit" aria-label="menu">
					<MenuIcon
						fontSize="large"
						className="nav-button"
						sx={{
							backgroundColor: theme.palette.primary.main,
							borderRadius: "50%",
							"&:hover": {
								backgroundColor: theme.palette.primary.dark,
							},
						}}
					/>
				</IconButton>
				<Typography variant="h6" style={{ flexGrow: 1 }}></Typography>
				<Box display="flex" alignItems="center" gap={2} m={2}>
					<Button size="large" variant="contained" className="nav-button">
						Home
					</Button>
					<Button
						className="nav-button"
						size="large"
						variant="contained"
						color="primary"
					>
						About
					</Button>
				</Box>
			</Toolbar>
		</StyledAppBar>
	);
};

export default NavBar;
