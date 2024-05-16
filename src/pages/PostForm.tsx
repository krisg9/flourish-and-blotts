import { FormControl, FormLabel, Grid, TextField } from "@mui/material";

const PostForm = () => {
	return (
		<>
			<FormControl>
				<Grid container spacing={2}>
					<Grid container item xs={6} direction="column">
						<FormLabel>Title</FormLabel>
						<TextField type="text" size="medium" defaultValue=""></TextField>
					</Grid>
					<Grid container item xs={6} direction="column">
						<FormLabel>Author</FormLabel>
						<TextField type="text" size="medium" defaultValue=""></TextField>
					</Grid>
				</Grid>
			</FormControl>
		</>
	);
};

export default PostForm;
