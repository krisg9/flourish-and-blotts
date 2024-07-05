import { useNavigate } from "react-router-dom";
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
		price: "$",
		cover: "",
	};

	const navigate = useNavigate();

	const handleSubmit = async (book: Book) => {
		const addedBook = await addBook(book);
		navigate(`/book/${addedBook.isbn}`);
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
