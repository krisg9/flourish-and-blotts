import { useEffect, useState } from "react";
import { getBookByIsbn, updateBook } from "../api/api";
import BookForm from "./BookForm";
import { useLoaderData } from "react-router-dom";

const EditBook = () => {
	const book = useLoaderData() as Book;
	const [initialBook, setInitialBook] = useState(book);

	useEffect(() => {
		const fetchBook = async () => {
			const bookToUpdate = await getBookByIsbn(book.isbn);
			setInitialBook(bookToUpdate);
		};
		fetchBook();
	}, [book.isbn]);

	const handleUpdateBook = async (book: Book) => {
		const updatedBook = await updateBook(book);
		window.location.href = `/book/${updatedBook.isbn}`;
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
