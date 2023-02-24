import React, { useState, useEffect } from "react";
import { mockList } from "./Shared/Assets/mockList";

const useMockedData = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    try {
      setTimeout(() => {
        setItems(mockList);
        setIsLoading(false);
      }, 5000);
    } catch (e) {
      console.log(e);
    }
  }, []);

  return {
    items,
    setItems,
    isLoading,
  };
};

export { useMockedData };
