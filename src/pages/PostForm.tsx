import { FormControl, TextField } from "@mui/material";

const PostForm = () => {
	return (
		<>
			<FormControl>
				<TextField type="text" size="medium" defaultValue="title"></TextField>
			</FormControl>
		</>
	);
};

export default PostForm;
