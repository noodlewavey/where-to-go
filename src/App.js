import logo from './logo.svg';
import './App.css';
import Header from './Header';
import { useState, useEffect } from 'react';
import { Card, AppBar, Toolbar, IconButton, Typography, Drawer, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import DirectionsForm from './DirectionsForm';
import Translation from './Translation';
import axios from 'axios';


function App() {

  const ReactDOM = require('react-dom');

  return (
    <div className="App">
      <div className="container">
        <Header />
        <div className="outerbox">
          <AppBar position="static" className="leftappBar" style={{width: '580px'}} sx={{borderRadius: '8px'}}>
          <Toolbar
              sx={{
                backgroundColor: '#707070',
                boxShadow: 'none',
                fontFamily: 'Inter, sans-serif',
                color: 'black',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: '-8px',
                  left: '0',
                  right: '0',
                  height: '8px',
                  backgroundColor: '#707070',
                  borderTopLeftRadius: '8px',
                  borderTopRightRadius: '8px',
                },
              }}
>
    <p>WHERE TO?</p>
</Toolbar>
            <Card className="customCard" sx={{ width: '580px', backgroundColor: '#e4dfe0'}}>
              <DirectionsForm/>

            </Card>
          </AppBar>
          <AppBar position="static" className="rightappBar" style={{width: '580px'}} sx={{borderRadius: '8px'}}>
          <Toolbar
              sx={{
                backgroundColor: '#707070',
                boxShadow: 'none',
                fontFamily: 'Inter, sans-serif',
                color: 'black',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: '-8px',
                  left: '0',
                  right: '0',
                  height: '8px',
                  backgroundColor: '#707070',
                  borderTopLeftRadius: '8px',
                  borderTopRightRadius: '8px',
                },
              }}
>
    <p>DIRECTIONS HERE!</p>
</Toolbar>

            <Card className="customCard" sx={{ width: '580px', backgroundColor: '#e4dfe0'}}>
              <Translation />
            </Card>
          </AppBar>
        </div>
      </div>
    </div>
  );
}

export default App;
