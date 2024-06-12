import { useEffect } from "react";
import {
	Grid,
	CircularProgress,
	Box,
	Alert,
	Typography,
	Button,
	Stack,
} from "@mui/material";
import BookCard from "../components/BookCard";
import { useBooks } from "../hooks/hooks";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import LastPageIcon from "@mui/icons-material/LastPage";
import FirstPageIcon from "@mui/icons-material/FirstPage";

const Home = () => {
	const { books, fetchState, error, refresh, pagination, fetchBooks } =
		useBooks();

	useEffect(() => {
		const intervalId = setInterval(refresh, 60 * 1000);
		return () => clearInterval(intervalId);
	}, [refresh]);

	const handlePageChange = (pageUrl?: string) => {
		if (pageUrl) {
			fetchBooks(pageUrl);
		}
	};

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
			<Box>
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
				<Box display="flex" justifyContent="center" marginTop={3}>
					<Stack direction="row" spacing={2}>
						<Button
							variant="contained"
							color="primary"
							disabled={!pagination.first}
							onClick={() => handlePageChange(pagination.first)}
						>
							<FirstPageIcon />
						</Button>
						<Button
							variant="contained"
							color="primary"
							disabled={!pagination.prev}
							onClick={() => handlePageChange(pagination.prev)}
						>
							<ArrowBackIosNewIcon />
						</Button>
						<Button
							variant="contained"
							color="primary"
							disabled={!pagination.next}
							onClick={() => handlePageChange(pagination.next)}
						>
							<ArrowForwardIosIcon />
						</Button>
						<Button
							variant="contained"
							color="primary"
							disabled={!pagination.last}
							onClick={() => handlePageChange(pagination.last)}
						>
							<LastPageIcon />
						</Button>
					</Stack>
				</Box>
			</Box>
		);
	}
};

export default Home;
