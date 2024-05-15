import { Button, Grid, Paper, Typography } from "@mui/material";
import { useLoaderData } from "react-router-dom";

const BookDetails = () => {
	const book = useLoaderData() as Book;
	return (
		<Paper
			elevation={3}
			style={{ padding: "20px", minHeight: "300px", borderRadius: "1em" }}
		>
			<Grid
				container
				justifyContent="center"
				alignItems="flex-start"
				style={{ padding: "20px" }}
			>
				<Grid item xs={12} sm={6} md={4} lg={3}>
					<img src={book.cover} alt="Book Cover" />
				</Grid>
				<Grid item xs={12} sm={6} md={8} lg={9} style={{ paddingLeft: "1em" }}>
					<Typography variant="h3" gutterBottom>
						{book.title}
					</Typography>
					<Typography variant="h4" gutterBottom>
						{" "}
						{book.subtitle}
					</Typography>
					<Typography variant="h4" gutterBottom>
						Author: {book.author}
					</Typography>
					<Typography variant="h4" gutterBottom>
						Publisher: {book.publisher}
					</Typography>
					<Typography variant="h4" gutterBottom>
						Number of pages: {book.numPages}
					</Typography>
					<Typography variant="h4" gutterBottom>
						ISBN: {book.isbn}
					</Typography>
					<Typography variant="h4" gutterBottom>
						Price: {book.price}
					</Typography>
					<Button variant="contained" color="primary">
						Buy Now
					</Button>
				</Grid>
			</Grid>
		</Paper>
	);
};

export default BookDetails;
