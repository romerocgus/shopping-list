import React from "react";

import { Typography, Box, Card, List } from "@mui/material";
import { ShoppingListItem } from "./ShoppingListItem";

const ShoppingList = ({ elements, onToggleBuy, isBuyList }) => {
  return (
    <Card variant="outlined" sx={{ minWidth: 300, paddingTop: 2 }}>
      <Box display="flex" flexDirection="column">
        <Typography variant="subtitle1" align="center" mb={4}>
          {isBuyList ? "To Buy" : "Already Have"}
        </Typography>
        <List>
          {elements
            .filter((elem) => elem.inStock !== isBuyList)
            .map((elem) => (
              <ShoppingListItem
                key={`shopping-item-${elem.name}`}
                label={elem.name}
                isBuyList={isBuyList}
                onToggleBuy={onToggleBuy}
              />
            ))}
        </List>
      </Box>
    </Card>
  );
};

export { ShoppingList };
