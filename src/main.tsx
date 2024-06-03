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

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				path: "",
				element: <Home />,
			},
			{
				path: "/book/:isbn",
				element: <BookDetails />,
				loader: ({ params }) => {
					if (params.isbn) {
						return getBookByIsbn(params.isbn);
					} else {
						throw new Error("Could not find item!");
					}
				},
			},
			{
				path: "/books",
				element: <PostForm />,
			},
			{
				path: "/about",
				element: <AboutUs />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
);
