import { Box, Button, FormControl, TextField } from "@mui/material";
import { useState } from "react";
import { addBook } from "../api/api";
import { Link } from "react-router-dom";

const PostForm = () => {
	const [book, setBook] = useState<Book>({
		title: "",
		subtitle: "",
		isbn: "",
		abstract: "",
		numPages: 0,
		author: "",
		publisher: "",
		price: "",
		cover: "",
	});

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;
		setBook({
			...book,
			[name]: value,
		});
	};

	const handleSubmit = async (event: React.FormEvent) => {
		event.preventDefault();
		const addedBook = await addBook(book);
		window.location.href = `/books/${addedBook.isbn}`;
	};

	return (
		<Box
			component="form"
			onSubmit={handleSubmit}
			sx={{
				justifyItems: "center",
				display: "flex",
				flexDirection: "column",
				gap: 3,
				//width: "70%",
				marginX: "4em",
				paddingY: "3em",
			}}
		>
			<FormControl>
				<TextField
					name="title"
					label="Title"
					value={book.title}
					onChange={handleChange}
					variant="outlined"
					required
				/>
			</FormControl>
			<FormControl>
				<TextField
					name="subtitle"
					label="Subtitle"
					value={book.subtitle}
					onChange={handleChange}
					variant="outlined"
				/>
			</FormControl>
			<FormControl>
				<TextField
					name="isbn"
					label="ISBN"
					value={book.isbn}
					onChange={handleChange}
					variant="outlined"
					required
				/>
			</FormControl>
			<FormControl>
				<TextField
					name="abstract"
					label="Abstract"
					value={book.abstract}
					onChange={handleChange}
					variant="outlined"
					multiline
				/>
			</FormControl>
			<FormControl>
				<TextField
					name="numPages"
					label="Number of Pages"
					type="number"
					value={book.numPages}
					onChange={handleChange}
					variant="outlined"
					required
				/>
			</FormControl>
			<FormControl>
				<TextField
					name="author"
					label="Author"
					value={book.author}
					onChange={handleChange}
					variant="outlined"
					required
				/>
			</FormControl>
			<FormControl>
				<TextField
					name="publisher"
					label="Publisher"
					value={book.publisher}
					onChange={handleChange}
					variant="outlined"
					required
				/>
			</FormControl>
			<FormControl>
				<TextField
					name="price"
					label="Price"
					value={book.price}
					onChange={handleChange}
					variant="outlined"
					required
				/>
			</FormControl>
			<Box
				sx={{ display: "flex", justifyContent: "center", margin: 3, gap: 2 }}
			>
				<Button size="large" variant="contained" color="primary" type="submit">
					Save
				</Button>
				<Link to={"/"}>
					<Button size="large" variant="contained" color="error">
						Cancel
					</Button>
				</Link>
			</Box>
		</Box>
	);
};

export default PostForm;
