import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import {
	Link,
	LoaderFunctionArgs,
	useLoaderData,
	useNavigate,
} from "react-router-dom";
import { deleteBook, getBookByIsbn } from "../api/api";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useAuth } from "../context/AuthContext";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export const bookDetailsLoader = async ({ params }: LoaderFunctionArgs) => {
	const { isbn } = params;
	const book = await getBookByIsbn(isbn ?? "");

	return book;
};

const BookDetails = () => {
	const book = useLoaderData() as Book;

	const { role } = useAuth();

	const navigate = useNavigate();

	const handleDelete = async () => {
		await deleteBook(book);
		navigate("/");
	};

	return (
		<Paper
			elevation={3}
			style={{
				padding: "20px",
				minHeight: "300px",
				borderRadius: "1em",
			}}
		>
			<Box sx={{ position: "absolute", marginBottom: "300px" }}>
				<Button
					color="primary"
					variant="contained"
					size="large"
					onClick={() => navigate("/")}
				>
					<ArrowBackIosNewIcon />
				</Button>
			</Box>
			<Grid
				container
				justifyContent="center"
				alignItems="flex-start"
				style={{ paddingTop: "5em" }}
			>
				<Grid item xs={12} sm={7} md={8} lg={5}>
					<img src={book.cover} alt="Book Cover" />
				</Grid>
				<Grid item xs={12} sm={5} md={4} lg={7} style={{ paddingLeft: "1em" }}>
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
					<Box
						sx={{
							display: "flex",
							justifyContent: "center",
							margin: 3,
							gap: 2,
						}}
					>
						{role === "non-admin" ? (
							<Button size="large" variant="contained" color="primary">
								<ShoppingCartIcon></ShoppingCartIcon>
								Buy Now
							</Button>
						) : (
							<>
								<Button
									size="large"
									variant="contained"
									color="error"
									onClick={handleDelete}
								>
									<DeleteIcon /> Delete
								</Button>
								<Link to={`/book/${book.isbn}/edit`}>
									<Button size="large" variant="contained" color="primary">
										<EditIcon /> Edit
									</Button>
								</Link>
							</>
						)}
					</Box>
				</Grid>
			</Grid>
		</Paper>
	);
};

export default BookDetails;
