import React, { useState } from 'react';
import { SearchBar } from './Components/SearchBar';
import { ShoppingList } from './Components/ShoppingList';
import { mockList } from './Shared/Assets/mockList';
import { Box, Typography, CircularProgress } from '@mui/material';

function App() {
  const [items, setItems] = useState(mockList);
  const [searchCriteria, setSearchCriteria] = useState('');

  let searchedList = [];
  if (searchCriteria.length === 0) {
    searchedList = items;
  } else {
    searchedList = items.filter((elem) => elem.name.includes(searchCriteria));
  }

  const handleToggleBuy = (label) => {
    const newItems = items.map((elem) => {
      if (elem.name === label) {
        elem.inStock = !elem.inStock;
      }
      return elem;
    });
    setItems(newItems);
  };

  const handleAddElement = () => {
    const newItem = { name: searchCriteria, inStock: false };
    setItems([...items, newItem]);
    setSearchCriteria('');
  };

  const handleSearchChange = (event) => {
    setSearchCriteria(event.target.value);
  };

  let test = false;

  return (
    <Box display='flex' flexDirection='column' gap={4} alignItems='center'>
      <Typography variant='h3' align='center'>
        Shopping List
      </Typography>
      {test ? (
        <CircularProgress />
      ) : (
        <>
          <SearchBar
            searchCriteria={searchCriteria}
            onSearchChange={handleSearchChange}
            showButton={!searchedList.length}
            onButtonClick={handleAddElement}
          />
          <ShoppingList
            elements={searchedList}
            onToggleBuy={handleToggleBuy}
            isBuy={true}
          />
          <ShoppingList
            elements={searchedList}
            onToggleBuy={handleToggleBuy}
            isBuy={false}
          />
        </>
      )}
    </Box>
  );
}

export default App;
