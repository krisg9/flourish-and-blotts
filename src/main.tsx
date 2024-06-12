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

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				path: "",
				element: <Home />,
				errorElement: <ErrorPage />,
			},
			{
				path: "/book/:isbn",
				element: <BookDetails />,
				errorElement: <ErrorPage />,
				loader: bookDetailsLoader,
			},
			{
				path: "/book/add",
				element: <AddBookForm />,
				errorElement: <ErrorPage />,
			},
			{
				path: "/about",
				element: <AboutUs />,
				errorElement: <ErrorPage />,
			},
			{
				path: "/book/:isbn/edit",
				element: <EditBookForm />,
				errorElement: <ErrorPage />,
				loader: bookDetailsLoader,
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
