import React from "react";
import { IconButton, ListItem, ListItemText } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import CheckIcon from "@mui/icons-material/Check";

const ShoppingListItem = ({ label, onToggleBuy, isBuy }) => {
  return (
    <ListItem
      secondaryAction={
        <IconButton
          aria-label="action-button"
          onClick={() => onToggleBuy(label)}
        >
          {isBuy ? <CheckIcon /> : <AddIcon />}
        </IconButton>
      }
    >
      <ListItemText id={label} primary={label} />
    </ListItem>
  );
};

export { ShoppingListItem };
