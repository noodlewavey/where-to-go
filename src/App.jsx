import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './Header';
import { Card, AppBar, Toolbar, Dialog, IconButton } from '@mui/material';
import DirectionsForm from './DirectionsForm';
import Translation from './Translation';
import CloseIcon from '@mui/icons-material/Close';

function App() {
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [mode, setMode] = useState('');
  const [showErrorAlert, setShowErrorAlert] = useState(false);
  const [showDialog, setShowDialog] = useState(false);
  const [fieldEmpty, setFieldEmpty] = useState(false);
  const [directions, setDirections] = useState('');

  useEffect(() => {
    if (selectedLanguage) {
      fetchTranslation();
    }
  }, [selectedLanguage]);

  const fetchTranslation = async () => {
    try {
      const response = await axios.post('http://localhost:4000/translate', {
        q: 'Hello!',
        source: 'en',
        target: selectedLanguage,
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };


useEffect(() => {

  if (origin && destination && mode) {
    const fetchData = async () => {
      try {
        console.log('hello');
        console.log(destination);
        console.log(origin);
        
        const response = await axios.post('http://localhost:4000/directions', {
          origin: origin,
          destination: destination,
          mode: mode,
        });

        if (response.data.status === 'ZERO_RESULTS') {
          setShowErrorAlert(true);
          setShowDialog(true);
        }
        console.log(response.data);
        console.log(response.data.status);
        console.log(response.data.routes[0].legs[0].steps);
        setDirections(response.data.routes[0].legs[0].steps);
      } catch (error) {
        console.error(error);
        console.log("this is the origin", origin);
      }
    };

    fetchData();
  }
}, [origin, destination, mode, selectedLanguage]);

  const handleCloseDialog = () => {
    setShowDialog(false);
  };

  const handleCloseFieldEmptyDialog = () => {
    setFieldEmpty(false);
  };
  

  return (
    <div className="App">
      <div className="container">
        <Header />
        <div className="outerbox">
          <AppBar
            position="static"
            className="leftappBar"
            style={{ width: '580px' }}
            sx={{ borderRadius: '8px' }}
          >
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
            <Card className="customCard" sx={{ width: '580px', backgroundColor: '#e4dfe0' }}>
              <DirectionsForm
                setSelectedLanguage={setSelectedLanguage}
                setStart={setOrigin}
                setDest={setDestination}
                setMod={setMode}
                showErrorAlert={showErrorAlert}
                setFieldEmpty={setFieldEmpty}
              />
              {/*<p>{selectedLanguage}</p>
              <p>{origin}</p>
              <p>{destination}</p>
              <p>{mode}</p>
              <p>hello</p>
            */}
            </Card>
          </AppBar>
          <AppBar
            position="static"
            className="rightappBar"
            style={{ width: '580px' }}
            sx={{ borderRadius: '8px' }}
          >
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
            <Card className="customCard" sx={{ width: '580px', backgroundColor: '#e4dfe0' }}>
              <Translation />
            </Card>
          </AppBar>
        </div>
      </div>
      <Dialog open={showDialog} onClose={handleCloseDialog} fullWidth maxWidth="xs" PaperProps={{ sx: { borderRadius: '8px' } }}>
  <AppBar position="relative">
  <Toolbar sx={{
                backgroundColor: '#707070',
                boxShadow: 'none',
                fontFamily: 'Inter, sans-serif',
                color: 'black',
  }}>
      <IconButton edge="end" color="inherit" onClick={handleCloseDialog} aria-label="close">
        <CloseIcon />
      </IconButton>
      </Toolbar>
  </AppBar>
  {/* Content of the dialog */}
  <div style={{ padding: '24px' }}>
    <p>No directions found. Try searching again?</p>
  </div>
</Dialog>

<Dialog open={fieldEmpty} onClose={handleCloseFieldEmptyDialog} fullWidth maxWidth="xs" PaperProps={{ sx: { borderRadius: '8px' } }}>
  <AppBar position="relative">
  <Toolbar sx={{
                backgroundColor: '#707070',
                boxShadow: 'none',
                fontFamily: 'Inter, sans-serif',
                color: 'black',
  }}>
      <IconButton edge="end" color="inherit" onClick={handleCloseFieldEmptyDialog} aria-label="close">
        <CloseIcon />
      </IconButton>
      </Toolbar>
  </AppBar>
  {/* Content of the dialog */}
  <div style={{ padding: '24px' }}>
    <p>One of your fields is empty. Input again!</p>
  </div>
</Dialog>

    </div>
  );
}

export default App;
