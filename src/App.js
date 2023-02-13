import React, { useState } from "react";

import { Typography, Box } from "@mui/material";

import { mockList } from "./Shared/Assets/mockList";
import { ShoppingList } from "./Components/ShoppingList";
import { SearchBar } from "./Components/SearchBar";

function App() {
  const [shoppingList, setShoppingList] = useState(mockList);
  const [showAddButton, setShowAddButton] = useState(false);
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
    if (!shoppingList.some((elem) => elem.name.includes(event.target.value))) {
      setShowAddButton(true);
    } else {
      setShowAddButton(false);
    }
  };

  const handleAddElement = () => {
    const newElement = {
      name: searchCriteria,
      inStock: false,
    };
    setShoppingList((prevState) => [...prevState, newElement]);
    setSearchCriteria("");
    setShowAddButton(false);
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
      <SearchBar
        searchCriteria={searchCriteria}
        onSearchChange={handleSearchChange}
        onButtonClick={handleAddElement}
        showButton={showAddButton}
      />
      <ShoppingList
        elements={searchedList}
        onToggleBuy={handleToggleBuy}
        isBuy={true}
      />
      <ShoppingList elements={searchedList} onToggleBuy={handleToggleBuy} />
    </Box>
  );
}

export default App;
