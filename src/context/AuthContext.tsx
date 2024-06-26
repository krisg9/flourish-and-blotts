import { ReactNode, createContext, useContext, useState } from "react";
import { postLogin, updateBasket } from "../api/api";
import { useNavigate } from "react-router-dom";

interface AuthContextType {
	role: UserRole | null;
	email: string;
	isAuthenticated: boolean;
	basket: Basket;
	addToBasket: (book: Book) => void;
	removeFromBasket: (book: Book) => void;
	login: (user: UserLoginRequest) => Promise<void>;
	logout: () => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(
	undefined,
);

interface AuthContextProviderProps {
	children: ReactNode;
}

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
	const [role, setRole] = useState<UserRole | null>(null);
	const [email, setEmail] = useState<string>("");
	const [basket, setBasket] = useState<Basket>({
		books: [],
	});
	const [id, setId] = useState<number>(0);

	const navigate = useNavigate();

	const isAuthenticated = role !== null;

	const login = async (user: UserLoginRequest) => {
		const userResponse: User = await postLogin(user);
		setRole(userResponse.role);
		setEmail(userResponse.email);
		setBasket(userResponse.basket);
		setId(userResponse.id);
		navigate("/");
	};

	const logout = () => {
		setRole(null);
		setEmail("");
		navigate("/");
	};

	const addToBasket = async (book: Book) => {
		let newBasket: Book[] = [...basket.books, book];
		let updatedBasket: Basket = await updateBasket(id, newBasket);
		setBasket(updatedBasket);
	};

	const removeFromBasket = async (book: Book) => {
		let newBasket: Book[] = basket.books.filter((bookInBasket: Book) => {
			return bookInBasket.isbn != book.isbn;
		});
		let updatedBasket: Basket = await updateBasket(id, newBasket);
		setBasket(updatedBasket);
	};

	return (
		<AuthContext.Provider
			value={{
				role,
				email,
				login,
				logout,
				isAuthenticated,
				basket,
				addToBasket,
				removeFromBasket,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuth = (): AuthContextType => {
	const context = useContext(AuthContext);
	if (context === undefined) {
		throw new Error("No auth context available.");
	}
	return context;
};
