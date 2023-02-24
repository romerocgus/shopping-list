import React, { useState } from "react";
import { Typography, Box } from "@mui/material";
import { SearchBar } from "./Components/SearchBar";
import { ShoppingList } from "./Components/ShoppingList";
import { mockList } from "./Shared/Assets/mockList";

function App() {
  const [items, setItems] = useState(mockList);
  const [searchCriteria, setSearchCriteria] = useState("");
  console.log("lalalala");

  let searchedList = [];
  if (searchCriteria.length) {
    searchedList = items.filter((elem) => elem.name.includes(searchCriteria));
  } else {
    searchedList = items;
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
      <SearchBar
        searchCriteria={searchCriteria}
        onSearchChange={handleSearchChange}
        showButton={!searchedList.length}
        onButtonClick={handleAddElement}
      />
      <ShoppingList
        elements={searchedList}
        onToggleBuy={handleToggleBuy}
        isBuy
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
