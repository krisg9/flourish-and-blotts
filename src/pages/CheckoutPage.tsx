import { Box, Button, Paper, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const CheckoutPage = () => {
	return (
		<Paper elevation={3} sx={{ padding: "3em", borderRadius: "2em" }}>
			<Box sx={{ display: "flex", flexDirection: "column", gap: "2em" }}>
				<Typography variant="h2">Thank You for Your Order!</Typography>
				<Typography variant="h5">
					Your order has been placed successfully. You will receive an email
					confirmation shortly.
				</Typography>
				<Link to={"/"}>
					<Button variant="contained" color="primary">
						Continue Shopping
					</Button>
				</Link>
			</Box>
		</Paper>
	);
};

export default CheckoutPage;
