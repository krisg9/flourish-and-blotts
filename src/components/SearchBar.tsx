import { useState, ChangeEvent } from "react";
import { TextField, Button, Box } from "@mui/material";

interface SearchBarProps {
	onSearch: (isbn: string) => void;
}

const SearchBar = ({ onSearch }: SearchBarProps) => {
	const [isbn, setIsbn] = useState<string>("");

	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		setIsbn(e.target.value);
	};

	const handleSearch = () => {
		onSearch(isbn.trim());
	};

	return (
		<Box display="flex" alignItems="center" gap={2} mb={3}>
			<TextField
				sx={{
					"& .MuiOutlinedInput-root": {
						"& fieldset": {
							borderColor: "primary.main",
							borderWidth: 3,
						},
					},
				}}
				fullWidth
				label="Search by ISBN"
				variant="outlined"
				value={isbn}
				onChange={handleInputChange}
			/>
			<Button
				size="large"
				variant="contained"
				color="primary"
				onClick={handleSearch}
			>
				Search
			</Button>
		</Box>
	);
};

export default SearchBar;
