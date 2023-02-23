import React, { useState } from "react";

import { Typography, Box, CircularProgress } from "@mui/material";

import { ShoppingList } from "./Components/ShoppingList";
import { SearchBar } from "./Components/SearchBar";
import { useMockedData } from "./useMockedData";

function App() {
  const { shoppingList, setShoppingList, isLoading } = useMockedData();
  const [searchCriteria, setSearchCriteria] = useState("");

  let searchedList = [];
  if (searchCriteria.length === 0) {
    searchedList = shoppingList;
  } else {
    searchedList = shoppingList.filter((elem) =>
      elem.name.includes(searchCriteria)
    );
  }

  const handleSearchChange = (event) => {
    setSearchCriteria(event.target.value);
  };

  const handleAddElement = () => {
    const newElement = {
      name: searchCriteria,
      inStock: false,
    };
    setShoppingList((prevState) => [...prevState, newElement]);
    setSearchCriteria("");
  };

  const handleToggleBuy = (label) => {
    const newList = shoppingList.map((elem) => {
      if (elem.name === label) {
        elem.inStock = !elem.inStock;
      }
      return elem;
    });
    setShoppingList(newList);
  };

  return (
    <Box display="flex" flexDirection="column" gap={4} alignItems="center">
      <Typography variant="h3">Shopping List</Typography>
      {isLoading ? (
        <CircularProgress />
      ) : (
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
            isBuyList
          />
          <ShoppingList
            elements={searchedList}
            onToggleBuy={handleToggleBuy}
            isBuyList={false}
          />
        </>
      )}
    </Box>
  );
}

export default App;
