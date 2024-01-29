import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ThemeProvider, createTheme } from '@mui/material';

const root = ReactDOM.createRoot(document.getElementById('root'));
const { palette } = createTheme();
const { augmentColor } = palette;
const createColor = (mainColor) => augmentColor({ color: { main: mainColor } });
const theme = createTheme({
  palette: {
    anger: createColor('#F40B27'),
    apple: createColor('#5DBA40'),
    steelBlue: createColor('#5C76B7'),
    black: createColor('#000000'),
    white: createColor('#ffffff'),
  },
});



root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <div className="container-not-overflow">
    <App /></div>
    </ThemeProvider>
  </React.StrictMode>
);

