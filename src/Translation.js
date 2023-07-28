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

export default function Translation({translatedDir, directions, locations}) {

  const htmlToReactParser = new HTMLToReactParser();

  const [imageUrls, setImageUrls] = useState([]);

  const fetchImages = async (locations) => {
    try {
      const imageLinks = [];
  
      for (const sublocation of locations ) {
        const response = await axios.post('http://localhost:4000/streetview', {
          location: sublocation,
        });
        const imageData = response.data;

      const dataUrl = `data:image/jpeg;base64,${Buffer.from(imageData).toString('base64')}`;
  
        imageLinks.push(dataUrl);
      }
  
      setImageUrls(imageLinks);
      console.log(imageLinks);
    } catch (error) {
      console.error(error);
    }
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
            </AccordionDetails>
          </CustomAccordion>
        ))}
      </ThemeProvider>
    </div>
  );
}


//