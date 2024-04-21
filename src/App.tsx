import React from "react";
import "./App.css";
import BooksGrid from "./components/BookCard/BookCard";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

function App() {
	return (
		<div>
			<Header />
			<BooksGrid />
			<Footer />
		</div>
	);
}

export default App;
