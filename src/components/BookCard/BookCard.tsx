import {
	Button,
	ButtonGroup,
	Card,
	CardContent,
	CardMedia,
	Divider,
	Grid,
	Typography,
} from "@mui/material";
import React from "react";
import { useEffect, useState } from "react";

interface Book {
	title: string;
	subtitle: string;
	isbn: string;
	abstract: string;
	numPages: number;
	author: string;
	publisher: string;
	price: string;
	cover: string;
}

function BooksGrid() {
	const [books, setBooks] = useState<Book[]>([]);

	useEffect(() => {
		fetchBooks();
	}, []);

	const fetchBooks = async () => {
		fetch("http://localhost:4730/books?_limit=20")
			.then((res) => {
				if (!res.ok) {
					throw new Error("Failed to fetch books");
				}
				return res.json();
			})
			.then((data: Book[]) => {
				setBooks(data);
			})
			.catch((err) => console.error("Error fetching books:", err));
	};
	return (
		<Grid container spacing={3}>
			{books.map((book) => (
				<Grid item xs={12} sm={6} md={4} key={book.isbn}>
					<Card
						sx={{
							height: "700px",
							display: "flex",
							flexDirection: "column",
							border: "1px solid #ccc",
							borderRadius: "8px",
							boxShadow: "2px 2px 8px rgba(0, 0, 0, 0.1)",
						}}
					>
						<CardMedia
							component="img"
							alt={book.title}
							height="200"
							image={book.cover}
						/>
						<CardContent sx={{ flex: "1 1 auto" }}>
							<Typography variant="h5">{book.title}</Typography>
							<Typography variant="subtitle2">{book.subtitle}</Typography>
							<Typography variant="h5" color="primary">
								{book.price}
							</Typography>
						</CardContent>
						<Divider />
						<CardContent>
							<ButtonGroup>
								<Button variant="contained" color="primary">
									Details
								</Button>
								<Button variant="outlined" color="primary">
									Add to Cart
								</Button>
							</ButtonGroup>
						</CardContent>
					</Card>
				</Grid>
			))}
		</Grid>
	);
}

export default BooksGrid;
