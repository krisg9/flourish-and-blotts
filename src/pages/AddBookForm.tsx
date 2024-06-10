import { addBook } from "../api/api";
import BookForm from "../components/BookForm";

const AddBookForm = () => {
	const book = {
		title: "",
		subtitle: "",
		isbn: "",
		abstract: "",
		numPages: 0,
		author: "",
		publisher: "",
		price: "",
		cover: "",
	};

	const handleSubmit = async (book: Book) => {
		const addedBook = await addBook(book);
		window.location.href = `/book/${addedBook.isbn}`;
	};

	return (
		<BookForm
			initialBook={book}
			formTitle={"Add Book"}
			onSubmit={handleSubmit}
			isEditable={false}
		/>
	);
};

export default AddBookForm;
