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

export default function Translation() {
  return (
    <div>
      <ThemeProvider theme={theme}>
      <CustomAccordion>
        <CustomAccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Accordion 1</Typography>
        </CustomAccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </CustomAccordion>
      <CustomAccordion>
        <CustomAccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Accordion 2</Typography>
        </CustomAccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </CustomAccordion>
      <CustomAccordion>
        <CustomAccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>Disabled Accordion</Typography>
        </CustomAccordionSummary>
      </CustomAccordion>
      </ThemeProvider>
    </div>
  );
}
