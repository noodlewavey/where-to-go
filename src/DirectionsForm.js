import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

const CustomTextField = styled(TextField)(({ theme }) => ({
  backgroundColor: '#e4dfe0',
  borderRadius: '2px',
  width: '250px',
  fontFamily: 'Work Sans',
  '& .MuiInputBase-input': {
    fontFamily: 'Work Sans',
    height: '6px',
  },
  marginRight: '3px',
}));

const DirectionsForm = ({ onLanguageSelected, onSubmit }) => {
  const [selectedLanguageCode, setSelectedLanguageCode] = useState('');

  const handleLanguageSelection = (language) => {
    setSelectedLanguageCode(language.code);
    onLanguageSelected(language.code);
  };

  const handleSubmit = () => {
    onSubmit();
  };

  const languagesList = [
    {
      languages: [
        { code: 'en', name: 'English' },
        { code: 'ar', name: 'Arabic' },
        { code: 'zh', name: 'Chinese' },
        { code: 'fr', name: 'French' },
        { code: 'de', name: 'German' },
        { code: 'hi', name: 'Hindi' },
        { code: 'id', name: 'Indonesian' },
        { code: 'ga', name: 'Irish' },
        { code: 'it', name: 'Italian' },
        { code: 'ja', name: 'Japanese' },
        { code: 'ko', name: 'Korean' },
        { code: 'pl', name: 'Polish' },
        { code: 'pt', name: 'Portuguese' },
        { code: 'ru', name: 'Russian' },
        { code: 'es', name: 'Spanish' },
        { code: 'tr', name: 'Turkish' },
        { code: 'vi', name: 'Vietnamese' },
      ],
    },
  ];

  return (
    <Box sx={{ flexGrow: 1 }}>
      <CustomTextField
        id="select-language"
        select
        label="Select"
        value={selectedLanguageCode}
        onChange={(e) => setSelectedLanguageCode(e.target.value)}
        helperText="Select your language"
        SelectProps={{
          MenuProps: {
            anchorOrigin: {
              vertical: 'bottom',
              horizontal: 'center',
            },
            getContentAnchorEl: null,
          },
        }}
      >
        {languagesList[0].languages.map((language) => (
          <MenuItem key={language.code} value={language.code}>
            {language.name}
          </MenuItem>
        ))}
      </CustomTextField>
      <Button variant="outlined" endIcon={<SendIcon />} onClick={handleSubmit}>
        Send
      </Button>
    </Box>
  );
};

export default DirectionsForm;
