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

export default function DirectionsForm({ languagesList }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1} justifyContent="center">
        <Grid item xs={11.6} sx={{ marginTop: '12px' }}>
          <Item>
            <AddLocationIcon />
            <strong style={{ marginRight: 'auto' }}>Origin:</strong>
            <CustomTextField id="Origin" />
          </Item>
        </Grid>
        <Grid item xs={11.6}>
          <Item>
            <AddLocationAltIcon />
            <strong style={{ marginRight: 'auto' }}>Destination:</strong>
            <CustomTextField id="Destination" />
          </Item>
        </Grid>
        <Grid item xs={11.6}>
          <Item>
            <AirportShuttleIcon />
            <strong style={{ marginRight: 'auto' }}>Transport Mode:</strong>
            <CustomTextField id="Mode" />
          </Item>
        </Grid>
        <Grid item xs={11.6} sx={{ marginBottom: '12px' }}>
          <Item>
            <ChatBubbleOutlineIcon />
            <strong style={{ marginRight: 'auto' }}>Target Lang:</strong>
            <DropdownMenu languagesList={languagesList} />
            <Button variant="outlined" endIcon={<SendIcon />} sx={{ color: 'black', height:'55px', marginTop:'-20px'}}>
              Send
            </Button>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
