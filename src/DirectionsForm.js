import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import DropdownMenu from './DropdownMenu';
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import { useState } from 'react';
import { MenuItem, Select } from '@mui/material';



const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#e4dfe0',
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
  fontFamily: 'Work Sans',
  border: '1px solid #000',
  display: 'flex',
  alignItems: 'center',
  '& > *': {
    margin: theme.spacing(1),
  },
}));

const CustomTextField = styled(TextField)(({ theme }) => ({
  backgroundColor: '#e4dfe0',
  borderRadius: '2px',
  width: '250px',
  fontFamily: 'Work Sans',
  '& .MuiInputBase-input': {
    fontFamily: 'Work Sans',
    height: '6px',
  },
  marginRight:'3px',
}));

const CustomSelect = styled(Select)(({ theme }) => ({
  width: '245px', 
  height: '35px',
  fontFamily: 'Work Sans',
}));


export default function DirectionsForm({setSelectedLanguage, setStart, setDest, setMod, setFieldEmpty}){
  const [thisLang, setThislang] = useState('');
  const [begin, setBegin] = useState('');
  const [destination, setDestination] = useState('');
  const [mode, setMode] = useState('');

  const handleSendButtonClick=()=>{
    console.log("from directionsform", thisLang)
    console.log("ORIGIN:", begin);
    console.log("destination", destination);
    console.log("mode", mode);

    if (thisLang===''|| begin===''||destination===''||mode===''){
      setFieldEmpty(true);
    }
    setSelectedLanguage(thisLang);
    setStart(begin);
    setDest(destination);
    setMod(mode);
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1} justifyContent="center">
        <Grid item xs={11.6} sx={{ marginTop: '12px' }}>
          <Item>
            <AddLocationIcon />
            <strong style={{ marginRight: 'auto' }}>Origin:</strong>
            <CustomTextField id="Origin" value={begin} onChange={(e) => setBegin(e.target.value)}/>
          </Item>
        </Grid>
        <Grid item xs={11.6}>
          <Item>
            <AddLocationAltIcon />
            <strong style={{ marginRight: 'auto' }}>Destination:</strong>
            <CustomTextField id="Destination"  value={destination} onChange={(e) => setDestination(e.target.value)}/>
          </Item>
        </Grid>
        <Grid item xs={11.6}>
        <Item>
            <AirportShuttleIcon />
            <strong style={{ marginRight: 'auto' }}>Transport Mode:</strong>
            <CustomSelect
              value={mode}
              onChange={(e) => setMode(e.target.value)}
            >
              <MenuItem value="walking">Walking</MenuItem>
              <MenuItem value="driving">Driving</MenuItem>
              <MenuItem value="transit">Transit</MenuItem>
              <MenuItem value="bicycling">Bicycling</MenuItem>
            </CustomSelect>
          </Item>
        </Grid>
        <Grid item xs={11.6} sx={{ marginBottom: '12px' }}>
          <Item>
            <ChatBubbleOutlineIcon style={{marginTop: '-10px'}}/>
            <strong style={{ marginRight: '6px', marginTop: '-6px'}}>Target Lang:</strong>
            <DropdownMenu setSelectedLanguage={setThislang}/>
            <Button variant="outlined" endIcon={<SendIcon />} sx={{ color: 'black', height:'57px', marginTop:'-22px', marginLeft:'3px'}} onClick={handleSendButtonClick}>
              Send
            </Button>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
