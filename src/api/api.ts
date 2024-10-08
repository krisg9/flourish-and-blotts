const baseUrl: string = "http://localhost:4730";

export const getBasket = async (userId: number) => {
	return await fetch(`${baseUrl}/users/${userId}`, {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
		},
	})
		.then((res) => {
			if (!res.ok) {
				throw Error("Failed to get the basket.");
			}
			return res.json();
		})
		.then((data) => {
			return data.basket as Basket;
		})
		.catch((err: Error) => {
			console.error("Error occurred: " + err.message);
			throw err;
		});
};

export const updateBasket = async (userId: number, books: Book[]) => {
	return await fetch(`${baseUrl}/users/${userId}`, {
		method: "PATCH",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({ basket: { books: books } }),
	})
		.then((res) => {
			if (!res.ok) {
				throw Error("Failed to update the basket. Network error.");
			}
			return res.json();
		})
		.then((data) => {
			return data.basket as Basket;
		})
		.catch((err: Error) => {
			console.error("Error occurred: " + err.message);
			throw err;
		});
};

export const postLogin = async (userRequest: UserLoginRequest) => {
	return fetch(`${baseUrl}/login`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(userRequest),
	})
		.then((res) => {
			if (!res.ok) {
				throw Error("Failed to log in. Network error");
			}
			return res.json();
		})
		.then((data) => {
			return data.user as User;
		})
		.catch((err: Error) => {
			console.error("Error occurred: " + err.message);
			throw err;
		});
};

export const getBooksByPage = async (
	pageUrl: string = `${baseUrl}/books?_page=1&_limit=12`,
): Promise<{ books: Book[]; pagination: any }> => {
	return fetch(pageUrl)
		.then((res) => {
			if (!res.ok) {
				throw new Error("Failed to fetch books.");
			}
			const linkHeader = res.headers.get("Link");
			const pagination = parseLinkHeader(linkHeader ?? "");
			return res.json().then((data) => ({ books: data, pagination }));
		})
		.catch((err) => {
			console.error("Error fetching books.", err);
			throw err;
		});
};

interface LinkHeader {
	[rel: string]: string;
}

function parseLinkHeader(header: string): LinkHeader {
	const links: LinkHeader = {};

	const parts = header.split(",");

	parts.forEach((part) => {
		const section = part.split(";");
		if (section.length !== 2) return;

		const url = section[0].trim().replace(/<(.*)>/, "$1");
		const relMatch = section[1].trim().match(/rel="(.*)"/);

		if (relMatch) {
			const rel = relMatch[1];
			links[rel] = url;
		}
	});

	return links;
}

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
