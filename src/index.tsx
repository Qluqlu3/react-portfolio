import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './components/NavBar';
import Content from './components/Content';
import { ThemeProvider } from 'styled-components';
import { theme } from './utils/theme';

import './css/index.css';

ReactDOM.render(
  <>
    <ThemeProvider theme={theme}>
      <NavBar />
      <Content />
    </ThemeProvider>
  </>,
  document.getElementById('root')
);
