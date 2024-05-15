import "./index.css";
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import BooksList from "./components/BooksList.tsx";
import BookDetailsScreen from "./components/BookDetails.tsx";
import { getBookByIsbn } from "./api/api.ts";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				path: "",
				element: <BooksList />,
			},
			{
				path: "/book/:isbn",
				element: <BookDetailsScreen />,
				loader: ({ params }) => {
					if (params.isbn) {
						return getBookByIsbn(params.isbn);
					} else {
						throw new Error("Could not find item!");
					}
				},
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
);
