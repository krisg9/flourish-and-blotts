import {
	Typography,
	Button,
	Grid,
	List,
	ListItem,
	ListItemText,
	Paper,
	ListItemAvatar,
	Avatar,
	Divider,
} from "@mui/material";

import { PointOfSale } from "@mui/icons-material";
import DeleteIcon from "@mui/icons-material/Delete";

const dummyItems: Book[] = [
	{
		title: "RESTful Web Services",
		subtitle: "Web services for the real world",
		isbn: "9780596529260",
		abstract:
			"&amp;quot;Every developer working with the Web needs to read this book.&amp;quot; - David Heinemeier Hansson, creator of the Rails framework&amp;quot;RESTful Web Services finally provides a practical roadmap for constructing services that embrace the Web, instead of trying to route around it.&amp;qu...",
		author: "Leonard Richardson, Sam Ruby",
		publisher: "O'Reilly Media",
		price: "$2.60",
		numPages: 448,
		cover: "http://localhost:4730/covers/9780596529260.png",
	},
	{
		title: "Web 2.0: A Strategy Guide",
		subtitle:
			"Business thinking and strategies behind successful Web 2.0 implementations",
		isbn: "9780596529963",
		abstract:
			"Web 2.0 makes headlines, but how does it make money? This concise guide explains what's different about Web 2.0 and how those differences can improve your company's bottom line. Whether you're an executive plotting the next move, a small business owner looking to expand, or an entrepreneur planning ...",
		author: "Amy Shuen",
		publisher: "O'Reilly Media",
		price: "$22",
		numPages: 200,
		cover: "http://localhost:4730/covers/9780596529963.png",
	},
	{
		title: "Introducing Microsoft WebMatrix",
		subtitle:
			"Everything you need to build fully-functional, scalable web sites - in one tool",
		isbn: "9780735649705",
		abstract:
			"Get a running start with Microsoft WebMatrix - the free, downloadable web development solution featuring all the tools you need for server-side programming. This practical book introduces the templates, helper libraries, and other tools in WebMatrix for building and customizing a data-driven site - ...",
		author: "Laurence Moroney",
		publisher: "Microsoft Press",
		price: "$34.21",
		numPages: 352,
		cover: "http://localhost:4730/covers/9780735649705.png",
	},
];

const BasketPage = () => {
	const calculateTotal = () => {
		return 100;
	};

	return (
		<Paper
			elevation={3}
			style={{ padding: "3em", minHeight: "50%", borderRadius: "2em" }}
		>
			<Typography variant="h3" gutterBottom>
				Your Basket
			</Typography>
			<List>
				{dummyItems.map((book) => (
					<ListItem key={book.isbn} sx={{ width: "100%" }}>
						<Grid container alignItems={"center"} spacing={4}>
							<Grid item xs={2}>
								<ListItemAvatar>
									<Avatar
										variant="square"
										sx={{ height: "100px", width: "50px" }}
										src={book.cover}
									></Avatar>
								</ListItemAvatar>
							</Grid>
							<Grid item xs={6}>
								<ListItemText
									primaryTypographyProps={{ sx: { fontSize: "25px" } }}
									primary={book.title}
									secondary={book.author}
									secondaryTypographyProps={{ sx: { fontSize: "20px" } }}
								/>
							</Grid>
							<Grid item xs={2}>
								<Typography sx={{ fontSize: "25px" }} variant="body1">
									{book.price} €
								</Typography>
							</Grid>
							<Grid item xs={2}>
								<Button variant="contained" size="medium" color="error">
									<DeleteIcon></DeleteIcon>
								</Button>
							</Grid>
						</Grid>
					</ListItem>
				))}
			</List>
			<Grid container justifyContent="flex-end" sx={{ marginY: "2em" }}>
				<Typography variant="h4">Total: {calculateTotal()} €</Typography>
			</Grid>
			<Grid container justifyContent="flex-end" style={{ marginTop: "10px" }}>
				<Button variant="contained" size="large" color="primary">
					<PointOfSale></PointOfSale>
					Checkout
				</Button>
			</Grid>
		</Paper>
	);
};

export default BasketPage;
