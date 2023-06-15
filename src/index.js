import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import {createTheme, ThemeProvider} from "@mui/material";

const theme = createTheme({
    typography: {
        allVariants: {
            fontFamily: 'Courier New',
        },
}});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
      <ThemeProvider theme={theme}>
          <App />
      </ThemeProvider>
  </BrowserRouter>
);