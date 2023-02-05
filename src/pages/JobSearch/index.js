//components and style imports
import NavBar from '../../components/NavBar/NavBar';
import Header from '../../components/Header';
import Jobs from '../../components/jobs/Jobs';
import { flexBox } from '../../components/jobs/styles';

//mui imports
import { Box } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';

//context providers imports
import theme from '../../context/themeContext';
import { SearchProvider } from '../../context/searchContext';

//job data imports
import data from "../../job-data.json"
import { UserAuthContextProvider } from "./context/UserAuthContext";


function JobSearch() {

  return (

    <UserAuthContextProvider>
      <SearchProvider jobs={data}>
        <ThemeProvider theme={theme}>
          <NavBar />
          <Box sx={flexBox}>
            <Title/>
            <Jobs />
          </Box>
        </ThemeProvider>
      </SearchProvider>
    </UserAuthContextProvider>


  );
}

export default JobSearch;
