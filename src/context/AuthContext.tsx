import { ReactNode, createContext, useContext, useState } from "react";
import { postLogin } from "../api/api";

interface AuthContextType {
	role: UserRole;
	email: string;
	login: (user: UserLoginRequest) => void;
	logout: () => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(
	undefined,
);

interface AuthContextProviderProps {
	children: ReactNode;
}

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
	const [role, setRole] = useState<UserRole>("");
	const [email, setEmail] = useState<string>("");

	const login = async (user: UserLoginRequest) => {
		const userResponse: User = await postLogin(user);
		setRole(userResponse.role);
		setEmail(userResponse.email);
	};

	const logout = () => {
		setRole("");
		setEmail("");
	};

	return (
		<AuthContext.Provider value={{ role, email, login, logout }}>
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
