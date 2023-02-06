import {Box, Paper, Typography} from "@mui/material"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';

import logo from "../NavBar/logo.png"
import { iconWrap, boxWrap, image, paperStyles, email } from "./styles"

import { useContext } from "react";
import {SignInContext} from "../../context/googleSignInContext"

// import {LinkedInIcon, InstagramIcon, TwitterIcon, FacebookIcon, EmailIcon} from "@mui/icons-material"
const Footer = ()=> {
    const {userName} = useContext(SignInContext)
    return (
        <Box sx={boxWrap}>
            <Paper sx={paperStyles}>
                <Typography color='primary' sx={email} variant='h6' component='h2'>{userName}</Typography>
                <Box
                    component='img'
                    src={logo}
                    sx={image}
                />

                <Box sx={iconWrap}>
                    <LinkedInIcon />
                    <InstagramIcon/>
                    <TwitterIcon />
                    <FacebookIcon />
                    <EmailIcon/>
                </Box>

            </Paper>

        </Box>
    )
}

export default Footer;