import { createTheme } from "@mui/material/styles";

const theme = createTheme({
	palette: {
		primary: {
			main: "#006341", // Emerald green
			light: "#008567",
			dark: "#00402B",
		},
		secondary: {
			main: "#63AB47",
			light: "#c0ddb5",
			dark: "#3b662a",
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
