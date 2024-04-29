import {
	Button,
	ButtonGroup,
	Card,
	CardContent,
	CardMedia,
	Divider,
	Typography,
} from "@mui/material";

interface PropTypes {
	book: Book;
}

const BookCard = ({ book }: PropTypes) => {
	return (
		<Card
			sx={{
				height: "700px",
				display: "flex",
				flexDirection: "column",
				border: "0.2em solid",
				borderRadius: "1.5em",
				boxShadow: "2px 2px 8px rgba(0, 0, 0, 0.1)",
			}}
		>
			<CardMedia
				component="img"
				alt={book.title}
				height="auto"
				image={book.cover}
			/>
			<CardContent sx={{ flex: "1 1 auto" }}>
				<Typography variant="h5">{book.title}</Typography>
				<Typography variant="subtitle2">{book.subtitle}</Typography>
				<Typography variant="h5" color="primary">
					{book.price}
				</Typography>
			</CardContent>
			<Divider />
			<CardContent>
				<ButtonGroup>
					<Button variant="contained" color="primary">
						Details
					</Button>
					<Button variant="outlined" color="primary">
						Add to Cart
					</Button>
				</ButtonGroup>
			</CardContent>
		</Card>
	);
};

export default BookCard;
