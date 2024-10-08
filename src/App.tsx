import { CssBaseline, ThemeProvider, Toolbar } from "@mui/material";
import "./App.css";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import theme from "./theme";
import { Outlet } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";

function App() {
	return (
		<div>
			<AuthContextProvider>
				<CssBaseline>
					<ThemeProvider theme={theme}>
						<CssBaseline />
						<NavBar />
						<Toolbar />
						<Header />
						<Outlet />
						<Footer />
					</ThemeProvider>
				</CssBaseline>
			</AuthContextProvider>
		</div>
	);
}

export default App;
