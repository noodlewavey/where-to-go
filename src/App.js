import logo from './logo.svg';
import './App.css';
import Header from './Header';
import { useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Drawer, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';


function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <div className="outerbox">
          <AppBar position="static" className="leftappBar" style={{width: '500px'}}>
            <Toolbar>
              <p>hello</p>
            </Toolbar>
          </AppBar>
          <AppBar position="static" className="rightappBar" style={{width: '500px'}}>
            <Toolbar>
              <p>baoba</p>
            </Toolbar>
          </AppBar>
        </div>
      </div>
    </div>
  );
}

export default App;
