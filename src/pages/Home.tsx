import { useEffect, useState } from "react";
import { Grid, CircularProgress, Box, Alert, Typography } from "@mui/material";
import { getAllBooks, getBookByIsbn } from "../api/api";
import SearchBar from "../components/SearchBar";
import BookCard from "../components/BookCard";

const Home = () => {
	const [books, setBooks] = useState<Book[]>([]);
	const [filteredBooks, setFilteredBooks] = useState<Book[]>([]);
	const [loading, setLoading] = useState<boolean>(false);
	const [error, setError] = useState<Error | null>(null);

	useEffect(() => {
		const fetchBooks = async () => {
			setLoading(true);
			setError(null);

			try {
				const fetchedBooks = await getAllBooks();
				fetchedBooks.push({
					title: "Cool random book",
					subtitle: "Random subtitle",
					isbn: "1234",
					abstract: "Very cool random book",
					numPages: 123,
					author: "Some random dude",
					publisher: "Some random publisher",
					price: "$1244.5",
					cover: "",
				});
				setBooks(fetchedBooks);
				setFilteredBooks(fetchedBooks);
			} catch (err) {
				setError(err as Error);
			} finally {
				setLoading(false);
			}
		};
		fetchBooks();
	}, []);

	const handleSearch = async (isbn: string) => {
		setError(null);
		if (isbn === "") {
			setFilteredBooks(books);
		} else {
			setLoading(true);
			try {
				const book = await getBookByIsbn(isbn);
				setFilteredBooks(book ? [book] : []);
			} catch (err) {
				setError(err as Error);
			} finally {
				setLoading(false);
			}
		}
	};

	return (
		<div>
			{loading ? (
				<Box
					display="flex"
					justifyContent="center"
					alignItems="center"
					height="100%"
				>
					<CircularProgress
						color="primary"
						size={400}
						sx={{
							display: "flex",
						}}
					/>
				</Box>
			) : error ? (
				<Box
					display="flex"
					justifyContent="center"
					alignItems="center"
					height="100%"
				>
					<Alert severity="error">
						<Typography variant="h6">
							An error occurred while fetching books: {error.message}
						</Typography>
					</Alert>
				</Box>
			) : (
				<div>
					<SearchBar onSearch={handleSearch} />
					<Grid
						container
						spacing={3}
						justifyContent={
							filteredBooks.length === 1 ? "center" : "flex-start"
						}
					>
						{filteredBooks.map((book) => (
							<Grid
								item
								xs={12}
								sm={6}
								md={filteredBooks.length === 1 ? 6 : 4}
								key={book.isbn}
							>
								<BookCard book={book} key={book.isbn} />
							</Grid>
						))}
					</Grid>
				</div>
			)}
		</div>
	);
};

export default Home;
