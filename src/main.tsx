import "./index.css";
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { getBookByIsbn } from "./api/api.ts";
import BookDetails from "./pages/BookDetails.tsx";
import AboutUs from "./pages/AboutUs.tsx";
import PostForm from "./pages/PostForm.tsx";
import Home from "./pages/Home.tsx";
import ErrorPage from "./pages/ErrorPage.tsx";

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
				loader: ({ params }) => {
					if (params.isbn) {
						return getBookByIsbn(params.isbn);
					} else {
						throw new Error("Could not find item!");
					}
				},
			},
			{
				path: "/book/add",
				element: <PostForm />,
				errorElement: <ErrorPage />,
			},
			{
				path: "/about",
				element: <AboutUs />,
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
