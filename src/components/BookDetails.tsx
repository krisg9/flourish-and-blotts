import { Box, Container } from "@mui/material";
import { useLoaderData } from "react-router-dom";
import BookCard from "./BookCard";

const BookDetailsScreen = () => {
	const book = useLoaderData() as Book;
	return (
		<Container>
			<Box>
				<BookCard book={book} />
			</Box>
		</Container>
	);
};

export default BookDetailsScreen;
