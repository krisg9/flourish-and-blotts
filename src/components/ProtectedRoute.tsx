import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { ReactElement } from "react";

interface PropsType {
	children: React.ReactNode;
}

const ProtectedRoute = ({ children }: PropsType): ReactElement => {
	const { role } = useAuth();

	return role !== null ? <>{children}</> : <Navigate to={"/login"} replace />;
};

export default ProtectedRoute;
