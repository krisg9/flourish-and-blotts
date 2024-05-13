import { CssBaseline, ThemeProvider, Toolbar } from "@mui/material";
import "./App.css";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import BooksList from "./components/BooksList";
import Footer from "./components/Footer";
import theme from "./theme";

function App() {
	return (
		<div>
			<CssBaseline>
				<ThemeProvider theme={theme}>
					<CssBaseline />
					<NavBar />
					<Toolbar />
					<Header />
					<BooksList />
					<Footer />
				</ThemeProvider>
			</CssBaseline>
		</div>
	);
}

export default App;
