import { Card, Box, Typography, List } from '@mui/material';
import React from 'react';
import { ShoppingListItem } from './ShoppingListItem';

const ShoppingList = ({ elements, onToggleBuy, isBuy }) => {
  return (
    <Card variant='outlined' sx={{ minWidth: 300, paddingTop: 2 }}>
      <Box display='flex' flexDirection='column'>
        <Typography variant='subtitle1' align='center' mb={4}>
          {isBuy ? 'En stock' : 'Sin stock'}
        </Typography>
        <List>
          {elements
            .filter((elem) => elem.inStock === isBuy)
            .map((elem) => (
              <ShoppingListItem
                key={`shopping-item-${elem.name}`}
                label={elem.name}
                isBuy={isBuy}
                onToggleBuy={() => {
                  onToggleBuy(elem.name);
                }}
              />
            ))}
        </List>
      </Box>
    </Card>
  );
};

export { ShoppingList };
