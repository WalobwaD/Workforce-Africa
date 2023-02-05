import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import {Box, Typography} from "@mui/material"
import { Link } from 'react-router-dom';
import {iconBox, linkBox, textBox, searchText, icon} from "./styles"
const SearchLink = ()=> {
    return (
        <Link to='/search'>
            <Box sx={linkBox}>
                <Box sx={iconBox}>
                    <ArrowCircleRightIcon sx={icon} color='primary' />
                </Box>
                <Box sx={textBox}>
                    <Typography sx={searchText} >Search </Typography>
                </Box>
            </Box>
        </Link>

    )
}

export default SearchLink;