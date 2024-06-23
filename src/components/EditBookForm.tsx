import { useEffect, useState } from "react";
import { getBookByIsbn, updateBook } from "../api/api";
import BookForm from "./BookForm";
import { useLoaderData, useNavigate } from "react-router-dom";

const EditBook = () => {
	const book = useLoaderData() as Book;
	const [initialBook, setInitialBook] = useState(book);
	const navigate = useNavigate();

	useEffect(() => {
		const fetchBook = async () => {
			const bookToUpdate = await getBookByIsbn(book.isbn);
			setInitialBook(bookToUpdate);
		};
		fetchBook();
	}, [book.isbn]);

	const handleUpdateBook = async (book: Book) => {
		const updatedBook = await updateBook(book);
		navigate(`/book/${updatedBook.isbn}`);
	};

	return (
		<BookForm
			initialBook={initialBook}
			formTitle="Edit Book"
			onSubmit={handleUpdateBook}
			isEditable={true}
		/>
	);
};

export default EditBook;
