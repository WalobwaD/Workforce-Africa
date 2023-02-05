import {Link} from "react-router-dom"
import { linkStyle } from "./styles"
import {Link as MuiLink, Box, Typography} from "@mui/material"
import HomeIcon from '@mui/icons-material/Home';
import LogOut from "../../../auth/LogOut";
import ScreenSearchDesktopIcon from '@mui/icons-material/ScreenSearchDesktop';
import { useContext } from "react";
import {SignInContext} from "../../../context/googleSignInContext"
const NavLinks =()=>{
    const {currentUser} = useContext(SignInContext)
    return (
        <>
            {currentUser ? 
                    <Box sx={linkStyle}>
                    <Box 
                    component={Link}
                    to= '/'
                    >
                        <HomeIcon color="primary" />
                    </Box>
                    <LogOut />
                    <Box
                            component={Link}
                            to='/search'
                            sx={{cursor: 'pointer'}}
                            >
                                <ScreenSearchDesktopIcon color='primary'/>

                    </Box>    
                </Box> : 
                            <Box sx={linkStyle}>
                            <Box 
                            component={Link}
                            to= '/'
                            >
                                <HomeIcon color="primary" />
                            </Box>
                            <Box
                            component={Link}
                            to='/search'
                            sx={{cursor: 'pointer'}}
                            >
                                <ScreenSearchDesktopIcon color='primary'/>

                            </Box>
            
                </Box>    
        }

        </>

    )
}

export default NavLinks;