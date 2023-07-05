import React, { useState } from 'react';
import Box from '@mui/material/Box';
<<<<<<< HEAD
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
=======
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import DropdownMenu from './DropdownMenu';
import { TextField } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#e4dfe0',
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
  fontFamily: 'Work Sans',
  border: '1px solid #000',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  '& > *': {
    margin: theme.spacing(1),
  },
}));
>>>>>>> parent of 8570f06 (Added send button)

const CustomTextField = styled(TextField)(({ theme }) => ({
  backgroundColor: '#e4dfe0',
  borderRadius: '2px',
  width: '300px',
  fontFamily: 'Work Sans',
  '& .MuiInputBase-input': {
    fontFamily: 'Work Sans',
    height: '6px',
  },
  marginRight:'3px',
}));

export default function DirectionsForm() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1} justifyContent="center">
        <Grid item xs={11.6} sx={{ marginTop: '12px' }}>
          <Item>
            <Box display="flex">
              <AddLocationIcon />
              <strong>Origin:</strong>
            </Box>
            <CustomTextField id="Origin" />
          </Item>
        </Grid>
        <Grid item xs={11.6}>
          <Item>
            <Box display="flex">
              <AddLocationAltIcon />
              <strong> Destination:</strong>
            </Box>
            <CustomTextField id="Destination" />
          </Item>
        </Grid>
        <Grid item xs={11.6}>
          <Item>
            <Box display="flex">
              <AirportShuttleIcon />
              <strong>Transportation Mode:</strong>
            </Box>
            <CustomTextField id="Mode" />
          </Item>
        </Grid>
        <Grid item xs={11.6} sx={{ marginBottom: '12px' }}>
          <Item>
            <Box display="flex">
              <ChatBubbleOutlineIcon />
              <strong>Target Language:</strong>
            </Box>
            <DropdownMenu />
          </Item>
        </Grid>
      </Grid>
>>>>>>> parent of 8570f06 (Added send button)
    </Box>
  );
};

export default DirectionsForm;
