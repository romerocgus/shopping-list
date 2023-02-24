import React, { useState } from "react";
import { Typography, Box, CircularProgress } from "@mui/material";

import { SearchBar } from "./Components/SearchBar";
import { ShoppingList } from "./Components/ShoppingList";
import { useMockedData } from "./useMockedData";

function App() {
  const { items, setItems, isLoading } = useMockedData();
  const [searchCriteria, setSearchCriteria] = useState("");

  let searchedList = [];

  if (searchCriteria.length === 0) {
    searchedList = items;
  } else {
    searchedList = items.filter((elem) => elem.name.includes(searchCriteria));
  }

  const handleSearchChange = (event) => {
    setSearchCriteria(event.target.value);
  };

  const handleAddElement = () => {
    const newElement = {
      name: searchCriteria,
      inStock: false,
    };

    setItems((prev) => [...prev, newElement]);
    setSearchCriteria("");
  };

  const handleToggleBuy = (label) => {
    const newList = items.map((elem) => {
      if (elem.name === label) {
        elem.inStock = !elem.inStock;
      }
      return elem;
    });
    setItems(newList);
  };

  return (
    <Box display="flex" flexDirection="column" gap={4} alignItems="center">
      <Typography variant="h3" align="center">
        Shopping List
      </Typography>
      {isLoading && <CircularProgress />}
      {!isLoading && (
        <>
          <SearchBar
            searchCriteria={searchCriteria}
            onSearchChange={handleSearchChange}
            onButtonClick={handleAddElement}
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
        </>
      )}
    </Box>
  );
}

export default App;
