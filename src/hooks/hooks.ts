import { useEffect, useState } from "react";
import { getBooksByPage } from "../api/api";

export const useBooks = () => {
	const [books, setBooks] = useState<Book[]>([]);
	const [fetchState, setFetchState] = useState<FetchState>("initial");
	const [error, setError] = useState<Error | null>(null);
	const [pagination, setPagination] = useState<{
		first?: string;
		prev?: string;
		next?: string;
		last?: string;
	}>({});

	const fetchBooks = async (pageUrl?: string) => {
		setFetchState("loading");
		setError(null);

		try {
			const { books: fetchedBooks, pagination } = await getBooksByPage(pageUrl);
			setBooks(fetchedBooks);
			setPagination(pagination);
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

	return { books, fetchState, error, refresh, pagination, fetchBooks };
};
