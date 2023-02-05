import {Link} from "react-router-dom"
import { linkStyle } from "./styles"
import {Link as MuiLink, Box, Typography} from "@mui/material"
import HomeIcon from '@mui/icons-material/Home';
const NavLinks =()=>{
    return (
        <Box>
                <Link to='/'>
                    <HomeIcon />
                </Link>


        </Box>
    )
}

export default NavLinks;