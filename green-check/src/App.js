import logo from './logo.svg';
import './App.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'Noto Sans KR, sans-serif',
  },
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <header>
        "Hello World"
      </header>
    </ThemeProvider>

  );
}

export default App;
