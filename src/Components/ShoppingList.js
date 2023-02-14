import React from "react";

import { Typography, Box, Card, List } from "@mui/material";
import { ShoppingListItem } from "./ShoppingListItem";

const ShoppingList = ({ elements, onToggleBuy, isBuy }) => {
  let filteredElements = [];
  if (isBuy) {
    filteredElements = elements.filter((elem) => elem.inStock === false);
  } else {
    filteredElements = elements.filter((elem) => elem.inStock === true);
  }

  return (
    <Card variant="outlined" sx={{ minWidth: 300, paddingTop: 2 }}>
      <Box display="flex" flexDirection="column">
        <Typography variant="subtitle1" align="center" mb={4}>
          {isBuy ? "To Buy" : "Already Have"}
        </Typography>
        <List>
          {filteredElements &&
            filteredElements.map((elem) => (
              <ShoppingListItem
                key={`shopping-item-${elem.name}`}
                label={elem.name}
                isBuy={isBuy}
                onToggleBuy={onToggleBuy}
              />
            ))}
        </List>
      </Box>
    </Card>
  );
};

export { ShoppingList };
