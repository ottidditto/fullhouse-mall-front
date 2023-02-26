import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import Body from './components/body/Body';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

// 다크모드 테마 설정 https://mui.com/material-ui/customization/dark-mode/
const darkTheme = createTheme({ 
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={darkTheme}>
        <Header />
        <Body />
      </ThemeProvider>

    </div>
  );
}

export default App;
