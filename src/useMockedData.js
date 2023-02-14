import React, { useState, useEffect } from "react";
import { mockList } from "./Shared/Assets/mockList";

const useMockedData = () => {
  const [shoppingList, setShoppingList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    try {
      setTimeout(() => {
        setShoppingList(mockList);
        setIsLoading(false);
      }, 5000);
    } catch (e) {
      console.log(e);
    }
  }, []);

  return {
    shoppingList,
    setShoppingList,
    isLoading,
  };
};

export { useMockedData };
