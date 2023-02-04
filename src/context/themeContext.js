import { createTheme } from "@mui/material";

const theme = createTheme({
    palette : {
        primary: {
            main: '#FD510C',
            light: '#FBB601'
        },
        secondary: {
            main: '#636365'
        },
        custom: {
            main: '#FBB601'
        }
    },
    breakpoints: {
        values: {
            mobile: 0,
            tablet: 640,
            laptop: 1024,
            desktop: 1280,
        }
    }
})

export default theme;