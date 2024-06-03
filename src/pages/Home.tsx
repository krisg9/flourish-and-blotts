import { useEffect } from "react";
import { Grid, CircularProgress, Box, Alert, Typography } from "@mui/material";
import BookCard from "../components/BookCard";
import { useBooks } from "../hooks/hooks";

const Home = () => {
	const { books, fetchState, error, refresh } = useBooks();

	useEffect(() => {
		const intervalId = setInterval(refresh, 2 * 1000);
		return () => clearInterval(intervalId);
	}, []);

	if (fetchState === "loading") {
		return (
			<>
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
			</>
		);
	}

	if (fetchState === "error") {
		return (
			<>
				<Box
					display="flex"
					justifyContent="center"
					alignItems="center"
					height="100%"
				>
					<Alert severity="error">
						<Typography variant="h6">
							An error occurred while fetching books: {error?.message}
						</Typography>
					</Alert>
				</Box>
			</>
		);
	}

	if (fetchState === "success") {
		return (
			<Grid
				container
				spacing={3}
				justifyContent={books.length === 1 ? "center" : "flex-start"}
			>
				{books.map((book) => (
					<Grid
						item
						xs={12}
						sm={6}
						md={books.length === 1 ? 6 : 4}
						key={book.isbn}
					>
						<BookCard book={book} key={book.isbn} />
					</Grid>
				))}
			</Grid>
		);
	}
};

export default Home;
