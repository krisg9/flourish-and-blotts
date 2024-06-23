import { ReactNode, createContext, useContext, useState } from "react";
import { postLogin } from "../api/api";
import { useNavigate } from "react-router-dom";

interface AuthContextType {
	role: UserRole | null;
	email: string;
	isAuthenticated: boolean;
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

	const navigate = useNavigate();

	const isAuthenticated = role !== null;

	const login = async (user: UserLoginRequest) => {
		const userResponse: User = await postLogin(user);
		setRole(userResponse.role);
		setEmail(userResponse.email);
		navigate("/");
	};

	const logout = () => {
		setRole(null);
		setEmail("");
		navigate("/");
	};

	return (
		<AuthContext.Provider
			value={{ role, email, login, logout, isAuthenticated }}
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
