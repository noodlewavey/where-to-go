import React from 'react';
import { styled } from '@mui/material/styles';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { createTheme, ThemeProvider } from '@mui/material/styles';

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

export default function Translation({ translatedDirections, htmlInstructions }) {
  return (
    <div>
      <ThemeProvider theme={theme}>
        {translatedDirections.map((direction, index) => (
          <CustomAccordion key={index}>
            <CustomAccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`panel${index + 1}a-content`}
              id={`panel${index + 1}a-header`}
            >
              <Typography>{`Step ${index + 1}`}</Typography>
            </CustomAccordionSummary>
            <AccordionDetails>
            <Typography dangerouslySetInnerHTML={{ __html: direction }} />
            </AccordionDetails>
          </CustomAccordion>
        ))}
      </ThemeProvider>
    </div>
  );
}
