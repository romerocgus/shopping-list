import React, { useState } from 'react';
import { SearchBar } from './Components/SearchBar';
import { ShoppingList } from './Components/ShoppingList';
import { mockList } from './Shared/Assets/mockList';
import { Box, Typography } from '@mui/material';

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

  /*const handleButtonClick = (v) => {
    const newItem = { name: v, inStock: false };
    setItems([...items, newItem]);
  };*/

  const handleSearchChange = (event) => {
    setSearchCriteria(event.target.value);
  };

  return (
    <Box display='flex' flexDirection='column' gap={4} alignItems='center'>
      <Typography variant='h3' align='center'>
        Shopping List
      </Typography>
      <SearchBar
        searchCriteria={searchCriteria}
        onSearchChange={handleSearchChange}
        showButton={!searchedList.length}
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
    </Box>
  );
}

export default App;
