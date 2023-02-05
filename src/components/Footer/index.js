import {Box, Paper} from "@mui/material"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';

import logo from "../NavBar/logo.png"
import { iconWrap, boxWrap, image, paperStyles } from "./styles"

// import {LinkedInIcon, InstagramIcon, TwitterIcon, FacebookIcon, EmailIcon} from "@mui/icons-material"
const Footer = ()=> {

    return (
        <Box sx={boxWrap}>
            <Paper sx={paperStyles}>
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