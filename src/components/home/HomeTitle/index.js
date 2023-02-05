import { Typography, Box } from "@mui/material"
import { title, titleWrap, flexBox } from "./styles";
import SearchLink from "../SearchLink";
import SignIn from "../../../auth/SignIn";
import { useContext } from "react";
import { SignInContext } from "../../../context/googleSignInContext";

const HomeTitle =()=> {
    const {currentUser} = useContext(SignInContext)
    return (
        <>
        {currentUser?         
            <Box sx={titleWrap}>
                <Typography color='primary' sx={title} variant='h2' component='h1'>
                    Welcome To WorkForce Africa
                </Typography>
                <Typography color='secondary'>
                    We’ll be with you on every walk of life on how to identify new opportunities
                </Typography>
                <Box sx={flexBox}>
                    <SearchLink />
                </Box>
            </Box> 
            : 
            <SignIn />
        }
    </>

    )
}

export default HomeTitle;