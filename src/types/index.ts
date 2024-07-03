interface Book {
	title: string;
	subtitle: string;
	isbn: string;
	abstract: string;
	numPages: number;
	author: string;
	publisher: string;
	price: string;
	cover: string;
	quantity?: number;
}

interface Basket {
	books: Book[];
}

type FetchState = "initial" | "loading" | "success" | "error";

interface User {
	email: string;
	role: UserRole;
	id: number;
	basket: Basket;
}

type UserRole = "admin" | "non-admin";

interface UserLoginRequest {
	email: string;
	password: string;
}
