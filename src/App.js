import React, { useState } from "react";
import { Typography, Box } from "@mui/material";

import { SearchBar } from "./Components/SearchBar";
import { ShoppingList } from "./Components/ShoppingList";
import { mockList } from "./Shared/Assets/mockList";

function App() {
  const [items, setItems] = useState(mockList);

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
      <SearchBar />
      <ShoppingList
        elements={items}
        onToggleBuy={handleToggleBuy}
        isBuy={true}
      />
      <ShoppingList
        elements={items}
        onToggleBuy={handleToggleBuy}
        isBuy={false}
      />
    </Box>
  );
}

export default App;
