const baseUrl: string = "http://localhost:4730";

export const addBook = async (book: Book) => {
	return fetch(`${baseUrl}/books`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(book),
	})
		.then((res) => {
			if (!res.ok) {
				throw new Error("Failed to add the book.");
			}
			return res.json();
		})
		.then((data: Book) => {
			return data;
		})
		.catch((err) => {
			console.error("Error adding book.", err);
			throw err;
		});
};

export const getBooksByPage = async (
	page: number,
	limit: number,
): Promise<Book[]> => {
	return fetch(`${baseUrl}/books?_page=${page}&_limit=${limit}`)
		.then((res) => {
			if (!res.ok) {
				throw new Error("Failed to fetch books.");
			}
			return res.json();
		})
		.then((data: Book[]) => {
			return data;
		})
		.catch((err) => {
			console.error("Error fetching books.", err);
			throw err;
		});
};

export const getAllBooks = async (): Promise<Book[]> => {
	return fetch(`${baseUrl}/books?_limit=50`)
		.then((res) => {
			if (!res.ok) {
				throw new Error("Failed to fetch books.");
			}
			return res.json();
		})
		.then((data: Book[]) => {
			return data;
		})
		.catch((err) => {
			console.error("Error fetching books.", err);
			throw err;
		});
};

export const getBookByIsbn = async (isbn: string): Promise<Book> => {
	return fetch(`${baseUrl}/books/${isbn}`)
		.then((res: Response) => {
			if (!res.ok) {
				throw new Error(`Failed to fetch book with following ISBN: ${isbn}`);
			}
			return res.json();
		})
		.then((data: Book) => {
			return data;
		})
		.catch((err) => {
			console.error(err);
			throw err;
		});
};

export const updateBook = async (book: Book): Promise<Book> => {
	return fetch(`${baseUrl}/books/${book.isbn}`, {
		method: "PUT",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(book),
	})
		.then((res) => {
			if (!res.ok) {
				throw new Error(`Failed to PUT book: ${book} `);
			}
			return res.json();
		})
		.then((data: Book) => {
			return data;
		})
		.catch((err) => {
			console.error(err);
			throw err;
		});
};
