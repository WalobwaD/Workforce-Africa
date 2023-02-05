import { Typography } from "@mui/material";
import SearchBar from '../SearchBar';

import { textStyles, innerStyle } from "./styles";

const Header = ()=> (
    <>
        <Typography sx={textStyles} color='secondary' variant="h6" component='h1' align='center'>
            Land your 
            <Typography color='primary' sx={innerStyle} variant='h5' display='inline' component='span'> Dream Job </Typography> 
            with us!
        </Typography>
        <SearchBar/>
    </>
)

export default Header;