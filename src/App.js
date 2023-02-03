import './App.scss';
import NavBar from './components/NavBar/NavBar';
import { ThemeProvider } from '@mui/material/styles';
import theme from './context/themeContext';
import Jobs from './components/jobs/Jobs';
import { Box } from '@mui/material';
import data from "./job-data.json"
import { SearchProvider } from './context/searchContext';
import Title from './title/title';
function App() {
  return (
    <SearchProvider jobs={data}>
      <ThemeProvider theme={theme}>
      <NavBar />
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center'
        }}>
          <Title/>
          <Jobs />
        </Box>
      </ThemeProvider>
    </SearchProvider>

  );
}

export default App;
