import { createTheme } from "@mui/material/styles";

const theme = createTheme({
	palette: {
		primary: {
			main: "#006341", // Emerald green
			light: "#008567",
			dark: "#00402B",
		},
		secondary: {
			main: "#5C2D40", // Deep plum
			light: "#7A425A",
			dark: "#3B1E29",
		},
		background: {
			default: "#F3E5AB", // Light parchment
			paper: "#F7F3E6", // Soft ivory
		},
		text: {
			primary: "#333333", // Dark charcoal
			secondary: "#6C6C6C", // Medium gray
		},
	},
	typography: {
		fontFamily: "Playfair Display, serif",
	},
});

export default theme;
