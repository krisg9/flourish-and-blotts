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
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import { PointOfSale } from "@mui/icons-material";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { getBasket, updateBasket, updateBook } from "../api/api";

const BasketPage = () => {
	const { id } = useAuth();
	const [total, setTotal] = useState<number>(0);
	const [basket, setBasket] = useState<Basket>({ books: [] });

	useEffect(() => {
		const fetchBasket = async () => {
			const fetchedBasket = await getBasket(id);
			setBasket(fetchedBasket);
		};
		fetchBasket();
	}, [id]);

	const calculateTotal = () => {
		if (basket.books) {
			return basket.books.reduce((total, book) => {
				let numericPrice;
				try {
					numericPrice = parseFloat(
						book.price.replace("$", "").replace(",", "."),
					);
					if (isNaN(numericPrice)) {
						numericPrice = 10;
					}
				} catch (err) {
					console.error(err);
					numericPrice = 0;
				}
				return total + numericPrice;
			}, 0);
		} else {
			return 0;
		}
	};

	useEffect(() => {
		const newTotal = calculateTotal();
		setTotal(newTotal);
	}, [basket]);

	const handleRemoveItem = async (isbn: string) => {
		const newBasket = basket.books.filter((book: Book) => book.isbn != isbn);
		const updatedBasket = await updateBasket(id, newBasket);
		setBasket(updatedBasket);
	};

	return (
		<Paper
			elevation={3}
			style={{ padding: "3em", minHeight: "50%", borderRadius: "2em" }}
		>
			<Typography variant="h3" gutterBottom>
				<ShoppingCartIcon sx={{ fontSize: "35px" }}></ShoppingCartIcon> Your
				Basket
			</Typography>
			<List>
				{basket.books &&
					basket.books.map((book) => (
						<div key={book.isbn}>
							<ListItem sx={{ width: "100%" }}>
								<Grid container alignItems={"center"} spacing={4}>
									<Grid item xs={2}>
										<ListItemAvatar>
											<Avatar
												variant="square"
												sx={{ minHeight: "200px", minWidth: "fit-content" }}
												src={book.cover}
												alt={book.title}
											></Avatar>
										</ListItemAvatar>
									</Grid>
									<Grid item xs={6}>
										<ListItemText
											primaryTypographyProps={{ sx: { fontSize: "25px" } }}
											primary={book.title}
											secondary={"by " + book.author}
											secondaryTypographyProps={{ sx: { fontSize: "20px" } }}
										/>
									</Grid>
									<Grid item xs={2}>
										<Typography sx={{ fontSize: "25px" }} variant="body1">
											{book.price}
										</Typography>
									</Grid>
									<Grid item xs={2}>
										<Button
											variant="contained"
											size="medium"
											color="error"
											onClick={() => handleRemoveItem(book.isbn)}
										>
											<DeleteIcon></DeleteIcon>
										</Button>
									</Grid>
								</Grid>
							</ListItem>
							<Divider
								variant="middle"
								sx={{ borderBottomWidth: 4, backgroundColor: "grey" }}
							/>
						</div>
					))}
			</List>
			<Grid container justifyContent="flex-end" sx={{ marginY: "2em" }}>
				<Typography variant="h4">Total: $ {total.toFixed(2)}</Typography>
			</Grid>
			<Grid container justifyContent="flex-end" style={{ marginTop: "10px" }}>
				<Link to={"/checkout"}>
					<Button variant="contained" size="large" color="primary">
						<PointOfSale></PointOfSale>
						Checkout
					</Button>
				</Link>
			</Grid>
		</Paper>
	);
};

export default BasketPage;
