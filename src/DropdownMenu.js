import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import styled from '@emotion/styled';

const currencies = [
  {
    value: 'USD',
    label: '$',
  },
  {
    value: 'EUR',
    label: '€',
  },
  {
    value: 'BTC',
    label: '฿',
  },
  {
    value: 'JPY',
    label: '¥',
  },
];

const CustomTextField = styled(TextField)(({ theme }) => ({
  backgroundColor: '#e4dfe0',
  borderRadius: '2px',
  width: '300px',
  fontFamily: 'Work Sans',
  marginRight:'-5px',
  '& .MuiInputBase-input': {
    fontFamily: 'Work Sans',
    height: '6px',
  },
}));

function DropdownMenu({languagesList}) {
    
  return (
    <div>
      <CustomTextField id="selectcurrency"
      select label="Select"
      defaultValue="ENGLISH"
      helperText="Select your language"
      >
        {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
      </CustomTextField>
    </div>
  );
}

export default DropdownMenu;
