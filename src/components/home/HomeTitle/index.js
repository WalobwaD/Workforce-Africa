import { Typography, Box } from "@mui/material"
import { title, titleWrap } from "./styles";
import SearchLink from "../SearchLink";
const HomeTitle =()=> {
    return (
        <Box sx={titleWrap}>
            <Typography color='primary' sx={title} variant='h2' component='h1'>
                Welcome To WorkForce Africa
            </Typography>
            <Typography color='secondary'>
                We’ll be with you on every walk of life on how to identify new opportunities
            </Typography>
            <SearchLink />
        </Box>
    )
}

export default HomeTitle;