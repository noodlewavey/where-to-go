import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';
import AddLocationAlt from '@mui/icons-material';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import DropdownMenu from './DropdownMenu';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#e4dfe0',
  padding: theme.spacing(1),
  textAlign: 'left',
  color: theme.palette.text.secondary,
  fontFamily: 'Work Sans',
  border: '1px solid #000',
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'flex-start'
}));


export default function DirectionsForm() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1} justifyContent="center">
        <Grid item xs={11.6} sx={{ marginTop: '12px' }}>
          <Item><AddLocationIcon></AddLocationIcon><strong>Origin:</strong></Item>
        </Grid>
        <Grid item xs={11.6}>
          <Item><AddLocationAltIcon></AddLocationAltIcon><strong> Destination:</strong></Item>
        </Grid>
        <Grid item xs={11.6}>
          <Item><AirportShuttleIcon></AirportShuttleIcon><strong>Transportation Mode:</strong></Item>
        </Grid>
        <Grid item xs={11.6}  sx={{ marginBottom: '12px' }}>
          <Item><ChatBubbleOutlineIcon></ChatBubbleOutlineIcon><strong>Target Language:</strong><DropdownMenu /></Item>
        </Grid>
      </Grid>
    </Box>
  );
}