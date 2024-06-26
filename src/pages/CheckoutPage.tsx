import { Button, Paper, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const CheckoutPage = () => {
	const { clearBasket } = useAuth();
	return (
		<Paper
			elevation={3}
			style={{ padding: "3em", minHeight: "50%", borderRadius: "2em", gap: 5 }}
		>
			<Typography variant="h2" gutterBottom>
				Thank You for Your Order!
			</Typography>
			<Typography variant="h5" gutterBottom>
				Your order has been placed successfully. You will receive an email
				confirmation shortly.
			</Typography>
			<Link to={"/"}>
				<Button
					variant="contained"
					color="primary"
					onClick={() => clearBasket()}
				>
					Continue Shopping
				</Button>
			</Link>
		</Paper>
	);
};

export default CheckoutPage;
