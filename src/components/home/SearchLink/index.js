import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import {Box, Typography} from "@mui/material"
import { Link } from 'react-router-dom';
import {iconBox, linkBox, textBox, searchText, linkWrap, icon} from "./styles"
const SearchLink = ()=> {
    return (
        <Box 
            sx={linkWrap}
            component={Link}        
            to='/search'>

            <Box sx={linkBox}>
                <Box sx={iconBox}>
                    <ArrowCircleRightIcon sx={icon} color='primary' />
                </Box>
                <Box sx={textBox}>
                    <Typography sx={searchText} >Search </Typography>
                </Box>
            </Box>
        </Box>

    )
}

export default SearchLink;