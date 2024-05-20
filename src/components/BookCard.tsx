import {
	Box,
	Button,
	ButtonGroup,
	Card,
	CardContent,
	CardMedia,
	Tooltip,
	Typography,
} from "@mui/material";

import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

import no_image_available from "./../assets/no_image_available.jpg";
import { useState } from "react";
import { Link } from "react-router-dom";

interface BookProps {
	book: Book;
}

const BookCard = ({ book }: BookProps) => {
	const [likes, setLikes] = useState<number>(0);

	const likeClickHandler = () => {
		setLikes((currLikes) => currLikes + 1);
	};

	return (
		<Card
			sx={{
				height: "100%",
				display: "flex",
				flexDirection: "column",
				border: "0.2em solid",
				borderRadius: "1.5em",
				boxShadow: "2px 2px 8px rgba(0, 0, 0, 0.1)",
			}}
		>
			<CardMedia
				component="img"
				alt={`Image of ${book.title}`}
				height="auto"
				image={book.cover !== "" ? book.cover : no_image_available}
			/>
			<CardContent sx={{ flex: "1 1 auto" }}>
				<Tooltip
					title=<Typography sx={{ fontSize: "2em" }}>{book.title}</Typography>
					enterDelay={1000}
					leaveDelay={200}
				>
					<Typography
						variant="h4"
						gutterBottom
						sx={{
							whiteSpace: "nowrap",
							overflow: "hidden",
							textOverflow: "ellipsis",
						}}
					>
						{book.title}
					</Typography>
				</Tooltip>
				<Typography variant="subtitle1">{book.subtitle}</Typography>
				<Typography pt={2} variant="subtitle2">
					{book.publisher}
				</Typography>
				<Typography variant="h5" color="primary">
					{book.price}
				</Typography>
			</CardContent>
			<CardContent>
				<ButtonGroup size="large">
					<Link to={`/book/${book.isbn}`}>
						<Button variant="contained" color="primary">
							Details
						</Button>
					</Link>
					<Button variant="outlined" color="primary">
						Add to Cart
					</Button>
					<Button variant="contained" onClick={likeClickHandler}>
						{likes !== 0 ? (
							<Box display="flex">
								<FavoriteIcon />
								<Typography variant="button" ml={1}>{`${likes}`}</Typography>
							</Box>
						) : (
							<FavoriteBorderIcon />
						)}
					</Button>
				</ButtonGroup>
			</CardContent>
		</Card>
	);
};

export default BookCard;
