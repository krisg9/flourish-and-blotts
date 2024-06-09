const baseUrl: string = "http://localhost:4730";

export const getBooksByPage = async (
	pageUrl: string = `${baseUrl}/books?_page=1&limit=11`,
): Promise<{ books: Book[]; pagination: any }> => {
	return fetch(pageUrl)
		.then((res) => {
			if (!res.ok) {
				throw new Error("Failed to fetch books.");
			}
			const linkHeader = res.headers.get("Link");
			const pagination = parseLinkHeader(linkHeader);
			return res.json().then((data) => ({ books: data, pagination }));
		})
		.catch((err) => {
			console.error("Error fetching books.", err);
			throw err;
		});
};

const parseLinkHeader = (header: string | null) => {
	if (!header) return {};
	const links = header.split(",").reduce((acc, link) => {
		const [url, rel] = link.split(";").map((part) => part.trim());
		const cleanUrl = url.slice(1, -1); // Remove angle brackets
		const cleanRel = rel.split("=")[1].replace(/"/g, ""); // Remove quotes
		acc[cleanRel] = cleanUrl;
		return acc;
	}, {});
	return links;
};
export const deleteBook = async (book: Book) => {
	return fetch(`${baseUrl}/books/${book.isbn}`, {
		method: "DELETE",
	})
		.then((res) => {
			if (!res.ok) {
				throw new Error(`Failed to delete the book: ${book}`);
			}
			return res.json();
		})
		.catch((err) => {
			console.error("Error adding book.", err);
			throw err;
		});
};

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
