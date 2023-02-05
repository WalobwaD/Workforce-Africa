import NavBar from "../../components/NavBar/NavBar"
import HomeCard from "../../components/home/HomeCard"

import { ThemeProvider } from '@mui/material/styles';
import {Box, Button} from "@mui/material"
//context providers imports
import theme from '../../context/themeContext';
import HomeTitle from "../../components/home/HomeTitle";
import { ComponentWrapper } from "./styles";

import {SignInProvider} from "../../context/googleSignInContext"

const Home =()=>{

    return (
        <>
        <SignInProvider>
            <ThemeProvider theme={theme}>
                    <NavBar />
                    <Box sx={ComponentWrapper}>
                        <HomeTitle />
                        <HomeCard />
                    </Box>
            </ThemeProvider>
        </SignInProvider>


        </>
    )
}

export default Home