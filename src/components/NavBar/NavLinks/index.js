import { useContext } from "react";

import {Link} from "react-router-dom"
import {Box} from "@mui/material"
import HomeIcon from '@mui/icons-material/Home';
import ScreenSearchDesktopIcon from '@mui/icons-material/ScreenSearchDesktop';

import {motion} from "framer-motion"

import { linkStyle } from "./styles"
import LogOut from "../../../auth/LogOut";
import {SignInContext} from "../../../context/googleSignInContext"

const NavLinks =()=>{

    const {currentUser} = useContext(SignInContext)
    
    return (
        <>
            {currentUser ? 
                <Box 
                    component={motion.div}
                    initial={{ opacity: 0.7}}
                    transition={{duration:2}}
                    whileInView={{ opacity: 1 }}
                    sx={linkStyle}>
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
                            to='/'
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