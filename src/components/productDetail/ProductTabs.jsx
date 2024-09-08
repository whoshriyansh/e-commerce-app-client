import React, { useState } from "react";
import { Tab, Tabs, Box } from "@mui/material";

const ProductTabs = ({ product }) => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <Tabs value={value} onChange={handleChange} aria-label="product tabs">
        <Tab label="Description" />
        <Tab label="Additional Information" />
        <Tab label="Specification" />
        <Tab label="Reviews" />
      </Tabs>
      {value === 0 && (
        <Box sx={{ p: 2 }}>
          <p>{product.description}</p>
        </Box>
      )}
      {value === 1 && (
        <Box sx={{ p: 2 }}>
          <p>Additional product information</p>
        </Box>
      )}
      {value === 2 && (
        <Box sx={{ p: 2 }}>
          <p>Product specifications</p>
        </Box>
      )}
      {value === 3 && (
        <Box sx={{ p: 2 }}>
          <p>Product reviews</p>
        </Box>
      )}
    </Box>
  );
};

export default ProductTabs;
