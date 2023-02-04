//components and style imports
import NavBar from './components/NavBar/NavBar';
import Title from './title/title';
import Jobs from './components/jobs/Jobs';
import { flexBox } from './components/jobs/styles';

//mui imports
import { Box } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';

//context providers imports
import theme from './context/themeContext';
import { SearchProvider } from './context/searchContext';

//job data imports
import data from "./job-data.json"


function App() {

  return (

    <SearchProvider jobs={data}>
      <ThemeProvider theme={theme}>

        {/* comoponents */}
        <NavBar />
        <Box sx={flexBox}>
          <Title/>
          <Jobs />
        </Box>

      </ThemeProvider>
    </SearchProvider>

  );
}

export default App;
