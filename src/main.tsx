import "./index.css";
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import BookDetails, { bookDetailsLoader } from "./pages/BookDetails.tsx";
import AboutUs from "./pages/AboutUs.tsx";
import Home from "./pages/Home.tsx";
import ErrorPage from "./pages/ErrorPage.tsx";
import AddBookForm from "./pages/AddBookForm.tsx";
import EditBookForm from "./components/EditBookForm.tsx";
import LogInPage from "./pages/LogInPage.tsx";
import ProtectedRoute from "./components/ProtectedRoute.tsx";
import BasketPage from "./pages/BasketPage.tsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				path: "",
				element: (
					<ProtectedRoute>
						<Home />
					</ProtectedRoute>
				),
				errorElement: <ErrorPage />,
			},
			{
				path: "/book/:isbn",
				element: (
					<ProtectedRoute>
						<BookDetails />
					</ProtectedRoute>
				),
				errorElement: <ErrorPage />,
				loader: bookDetailsLoader,
			},
			{
				path: "/book/add",
				element: (
					<ProtectedRoute>
						<AddBookForm />
					</ProtectedRoute>
				),
				errorElement: <ErrorPage />,
			},
			{
				path: "/about",
				element: <AboutUs />,
				errorElement: <ErrorPage />,
			},
			{
				path: "/book/:isbn/edit",
				element: (
					<ProtectedRoute>
						<EditBookForm />
					</ProtectedRoute>
				),
				errorElement: <ErrorPage />,
				loader: bookDetailsLoader,
			},
			{
				path: "/basket",
				element: (
					<ProtectedRoute>
						<BasketPage />
					</ProtectedRoute>
				),
				errorElement: <ErrorPage />,
			},
			{
				path: "/login",
				element: <LogInPage />,
				errorElement: <ErrorPage />,
			},
			{
				path: "*",
				element: <ErrorPage />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
);
