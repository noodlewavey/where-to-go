import React from 'react';
import { styled } from '@mui/material/styles';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import {Parser as HTMLToReactParser} from 'html-to-react';
import { Button, Popover, Box } from '@mui/material';

const CustomAccordion = styled(Accordion)(({ theme }) => ({
  backgroundColor: '#e4dfe0',
  padding: theme.spacing(1),
  textAlign: 'left',
  color: theme.palette.text.secondary,
  fontFamily: 'Work Sans',
  border: '1px solid #000',
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  borderRadius: theme.shape.borderRadius,
}));

const theme = createTheme({
  typography: {
    fontFamily: 'Work Sans, sans-serif', // Set 'Work Sans' as the default font
  },
});

const CustomAccordionSummary = styled(AccordionSummary)(({ theme }) => ({
  fontFamily: 'Work Sans', // Set "Work Sans" as the font family
}));

export default function Translation({translatedDir, directions, locations, images}) {

  const htmlToReactParser = new HTMLToReactParser();
  const [openPopoverIndex, setOpenPopoverIndex] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);


  const handlePopoverOpen = (event, index) => {
    setAnchorEl(event.currentTarget);
    setOpenPopoverIndex(index);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
    setOpenPopoverIndex(null);
  };



  useEffect(() => {
    if (Array.isArray(translatedDir) && translatedDir.length > 0) {
      const direction = translatedDir[0];
      console.log(typeof direction);
    }
  }, [translatedDir]);


  return (
    <div>
      <ThemeProvider theme={theme}>
        {translatedDir.map((direction, index) => (
          <CustomAccordion key={index}>
            <CustomAccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`panel${index + 1}a-content`}
              id={`panel${index + 1}a-header`}
            >
              <Typography>{`Step ${index + 1}`}</Typography>
            </CustomAccordionSummary>
            <AccordionDetails>
            {htmlToReactParser.parse(direction)}
            <Box sx={{
    position: 'absolute', 
    right: 0, 
    top: '50%', 
    transform: 'translateY(-50%)'
  }}>
              <Button
              variant="outlined"
              onClick={(e) => handlePopoverOpen(e, index)}
              >
                SEE IMAGE
              </Button>
              </Box>
              <Popover
              open={openPopoverIndex === index}
              anchorEl={anchorEl}
              onClose={handlePopoverClose}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              transformOrigin={{
                verticla: 'top',
                horizontal: 'left',
              }}
              >
                {
                  images&&
               <img src={images[index]} alt={`Step ${index + 1}`} style={{maxWidth: '100%'}} />
                }
              </Popover>
            </AccordionDetails>
          </CustomAccordion>
        ))}
      </ThemeProvider>
    </div>
  );
}


//some kind of bug here