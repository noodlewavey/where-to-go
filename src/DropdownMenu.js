import React from 'react';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { styled } from '@mui/material/styles';

const CustomTextField = styled(TextField)(({ theme }) => ({
  backgroundColor: '#e4dfe0',
  borderRadius: '2px',
  width: '300px',
  fontFamily: 'Work Sans',
  marginRight: '-5px',
  '& .MuiInputBase-input': {
    fontFamily: 'Work Sans',
    height: '6px',
  },
}));

const DropdownMenu = ({ setSelectedLanguage }) => {
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

  const handleLanguageSelection = (event) => {
    const languageCode = event.target.value;
    const selectedLanguage = languagesList[0].languages.find(
      (language) => language.code === languageCode
    );
    setSelectedLanguage(selectedLanguage);
  };

  return (
    <CustomTextField
      id="select-language"
      select
      label="Select"
      defaultValue=""
      onChange={handleLanguageSelection}
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
  );
};

export default DropdownMenu;
