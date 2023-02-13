import React, { useState } from "react";

import {
  Typography,
  Box,
  InputAdornment,
  FormControl,
  InputLabel,
  IconButton,
  OutlinedInput,
  Card,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import CheckIcon from "@mui/icons-material/Check";

import { mockList } from "./Shared/Assets/mockList";

function App() {
  const [shoppingList, setShoppingList] = useState(mockList);
  const [showAddButton, setShowAddButton] = useState(false);
  const [searchCriteria, setSearchCriteria] = useState("");

  let filteredList = [];
  if (searchCriteria.length === 0) {
    filteredList = shoppingList;
  } else {
    filteredList = shoppingList.filter((elem) =>
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
      <FormControl variant="outlined" sx={{ minWidth: 300 }}>
        <InputLabel htmlFor="search">Search</InputLabel>
        <OutlinedInput
          id="search"
          label="Search"
          type="text"
          value={searchCriteria}
          onChange={handleSearchChange}
          endAdornment={
            showAddButton && (
              <InputAdornment position="end">
                <IconButton aria-label="add element" onClick={handleAddElement}>
                  {<AddIcon />}
                </IconButton>
              </InputAdornment>
            )
          }
        />
      </FormControl>
      <Card variant="outlined" sx={{ minWidth: 300, paddingTop: 2 }}>
        <Box display="flex" flexDirection="column">
          <Typography variant="subtitle1" align="center" mb={4}>
            To Buy
          </Typography>
          <List>
            {filteredList &&
              filteredList
                .filter((elem) => elem.inStock === false)
                .map((elem) => (
                  <ListItem
                    key={`toBuy-${elem.name}`}
                    secondaryAction={
                      <IconButton
                        aria-label="bought"
                        onClick={() => handleToggleBuy(elem.name)}
                      >
                        <CheckIcon />
                      </IconButton>
                    }
                  >
                    <ListItemText id={elem.name} primary={elem.name} />
                  </ListItem>
                ))}
          </List>
        </Box>
      </Card>
      <Card variant="outlined" sx={{ minWidth: 300, paddingTop: 2 }}>
        <Box display="flex" flexDirection="column">
          <Typography variant="subtitle1" align="center" mb={4}>
            Already Have
          </Typography>
          <List>
            {filteredList &&
              filteredList
                .filter((elem) => elem.inStock === true)
                .map((elem) => (
                  <ListItem
                    key={`have-${elem.name}`}
                    secondaryAction={
                      <IconButton
                        aria-label="add"
                        onClick={() => handleToggleBuy(elem.name)}
                      >
                        <AddIcon />
                      </IconButton>
                    }
                  >
                    <ListItemText id={elem.name} primary={elem.name} />
                  </ListItem>
                ))}
          </List>
        </Box>
      </Card>
    </Box>
  );
}

export default App;
