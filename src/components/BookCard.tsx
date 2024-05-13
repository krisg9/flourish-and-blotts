import {
	Button,
	ButtonGroup,
	Card,
	CardContent,
	CardMedia,
	Tooltip,
	Typography,
} from "@mui/material";

import no_image_available from "./../assets/no_image_available.jpg";

interface BookProps {
	book: Book;
}

const BookCard = ({ book }: BookProps) => {
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
				<Typography variant="h5" color="primary">
					{book.price}
				</Typography>
			</CardContent>
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
