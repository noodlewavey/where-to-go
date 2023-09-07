import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './Header';
import { Card, AppBar, Toolbar, Dialog, IconButton, Box, CircularProgress } from '@mui/material';
import DirectionsForm from './DirectionsForm';
import Translation from './Translation';
import CloseIcon from '@mui/icons-material/Close';
import {Parser as HTMLToReactParser} from 'html-to-react';



function App() {
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [mode, setMode] = useState('');
  const [showErrorAlert, setShowErrorAlert] = useState(false);
  const [showDialog, setShowDialog] = useState(false);
  const [fieldEmpty, setFieldEmpty] = useState(false);
  const [directions, setDirections] = useState([]);
  const [htmlInstructions, setHtmlInstructions] = useState([]);
  const [translatedDirections, setTranslatedDirections] = useState([]);
  const [streetLocations, setStreetLocations] = useState([]);
  const [loading, setLoading] = useState(false);
  
  const [imageUrls, setImageUrls] = useState([]);
  //this is an array of base64-encoded data URIs....



const htmlToReactParser = new HTMLToReactParser();



  const fetchTranslation = async (htmlInstructions) => {
    try {
      setLoading(true);
      // 1. Create an array of promises for each instruction
      const translationPromises = htmlInstructions.map(instruction => {
        return axios.post('http://localhost:4000/translate', {
          q: instruction,
          source: 'en',
          target: selectedLanguage,
        }).then(response => response.data.translatedText);  // Extract the translatedText from the response
      });
  
      // 2. Use Promise.all() to wait for all promises to resolve
      const transDir = await Promise.all(translationPromises);
  
      // 3. Update state with all the translated directions
      setTranslatedDirections(transDir);
  
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false); //end loading when translation complete 
    }
  };
  


useEffect(() => {
//this is to fetch directions from the user input
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

  const removeHtmlTags = (html) => {
    const regex = /(<([^>]+)>)/gi;
    return html.replace(regex, '');
  };

  //this is to set instructions after directions array is retrieved
  //set instructions then fetch translation of instructions 

  useEffect(() => {
    if (Array.isArray(directions) && directions.length > 0) {
      const instructions = directions.map((step) => removeHtmlTags(step.html_instructions));
      setHtmlInstructions(instructions);
      fetchTranslation(instructions);
    }
  }, [directions, selectedLanguage]);


  //see if i can combine these two useeffects...this and prev
  useEffect(() => {
    if (Array.isArray(directions) && directions.length > 0) {
      const locations = directions.map((step) => `${step.start_location.lat}, ${step.end_location.lng}`);
      setStreetLocations(locations);
    }
  }, [directions, selectedLanguage]);


  const fetchImages = async (locations) => {
    try {
      const imageLinks = [];
  
      for (const sublocation of locations ) {
        const response = await axios.get('http://localhost:4000/streetview', {
          params: { location: sublocation },
          responseType: 'arraybuffer'  // Ensure you get the data as an array buffer
        });

        // Convert ArrayBuffer to base64
        const b64Encoded = btoa(
            new Uint8Array(response.data).reduce(
                (data, byte) => data + String.fromCharCode(byte),
                '',
            ),
        );

        const dataUrl = `data:image/jpeg;base64,${b64Encoded}`;
        //hopefully this works 
  
        imageLinks.push(dataUrl);
      }
  
      setImageUrls(imageLinks);
      console.log(imageLinks);
    } catch (error) {
      console.error(error);
    }
};

//maybe combine this all into one useeffect?

  useEffect(() => {
    if (streetLocations && streetLocations.length > 0) {
        fetchImages(streetLocations);
        console.log("this is street location ", streetLocations[0]);
    }
}, [streetLocations]);
//once streetlocations are fetched, images are fetched 

//performance vs efficiency tradeoff
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
            {
  loading ? (
    <Box sx={{ display: 'flex', justifyContent: 'center', padding: '20px' }}>
      <CircularProgress />
    </Box>
  ) : translatedDirections.length > 0 ? (
    <Translation translatedDir={translatedDirections} directions={directions} locations={streetLocations} images={imageUrls}/>
  ) : (
    <p style={{ marginLeft: '22px' }}>No translated directions available.</p>
  )
}
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