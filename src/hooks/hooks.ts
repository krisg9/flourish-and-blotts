import { useEffect, useState } from "react";
import { getAllBooks } from "../api/api";

export const useBooks = () => {
	const [books, setBooks] = useState<Book[]>([]);
	const [fetchState, setFetchState] = useState<FetchState>("initial");
	const [error, setError] = useState<Error | null>(null);

	const fetchBooks = async () => {
		setFetchState("loading");
		setError(null);

		try {
			const fetchedBooks = await getAllBooks();
			fetchedBooks.push({
				title: "Cool random book",
				subtitle: "Random subtitle",
				isbn: "1234",
				abstract: "Very cool random book",
				numPages: 123,
				author: "Some random dude",
				publisher: "Some random publisher",
				price: "$1244.5",
				cover: "",
			});
			setBooks(fetchedBooks);
			setFetchState("success");
		} catch (err) {
			setError(err as Error);
			setBooks([]);
			setFetchState("error");
		}
	};

	useEffect(() => {
		fetchBooks();
	}, []);

	const refresh = () => fetchBooks();

	return { books, fetchState, error, refresh };
};
