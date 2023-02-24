import React from 'react';
import {
  InputAdornment,
  FormControl,
  InputLabel,
  IconButton,
  OutlinedInput,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
const SearchBar = ({
  searchCriteria,
  onSearchChange,
  onButtonClick,
  showButton,
}) => {
  return (
    <FormControl variant='outlined' sx={{ minWidth: 300 }}>
      <InputLabel htmlFor='search'>Search</InputLabel>
      <OutlinedInput
        id='search'
        label='Search'
        type='text'
        value={searchCriteria}
        onChange={onSearchChange}
        endAdornment={
          showButton && (
            <InputAdornment position='end'>
              <IconButton
                aria-label='add element'
                onClick={() => onButtonClick()}
              >
                {<AddIcon />}
              </IconButton>
            </InputAdornment>
          )
        }
      />
    </FormControl>
  );
};
export { SearchBar };
