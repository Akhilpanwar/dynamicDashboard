import React, { useState } from "react";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Chip,
  TextField,
  FormControl,
  Select,
  MenuItem,
  InputAdornment,
} from "@mui/material";
import { CiSearch } from "react-icons/ci";
import products from "../data/products.json";

const ProductTable: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortValue, setSortValue] = useState("last30days");

  const handleSearchChange = (event: any) => {
    setSearchTerm(event.target.value);
  };

  const handleSortChange = (event: any) => {
    setSortValue(event.target.value);
  };
  const handleSearchSubmit = (event: any) => {
    event.preventDefault();

    setSearchTerm("");
  };

  const filteredProducts = products.productData.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const sortedProducts = filteredProducts.sort((a, b) => {
    switch (sortValue) {
      case "name":
        return a.name.localeCompare(b.name);
      case "price":
        return a.price - b.price;
      case "totalSales":
        return a.totalSales - b.totalSales;
      case "last30days":
        return Number(a.last30days) - Number(b.last30days);
      default:
        return 0;
    }
  });

  return (
    <Box
      sx={{
        width: "100%",
        overflowX: "auto",
      }}
    >
      <TableContainer component={Paper}>
        <Box
          my={1}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box mx={2}>
            <Typography
              color="black"
              fontFamily="sans-serif"
              fontWeight="bold"
              variant="h5"
            >
              Product Sell
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <form onSubmit={handleSearchSubmit}>
              <TextField
                id="search-product"
                placeholder={` Search`}
                variant="outlined"
                size="small"
                value={searchTerm}
                hiddenLabel
                onChange={handleSearchChange}
                sx={{
                  marginBottom: "1rem",

                  "& .MuiOutlinedInput-notchedOutline": {
                    border: "none",
                  },
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <CiSearch color={searchTerm ? "black" : ""} />
                    </InputAdornment>
                  ),
                }}
              />
            </form>
            <FormControl size="small" hiddenLabel>
              <Select
                value={sortValue}
                onChange={handleSortChange}
                sx={{
                  marginRight: "3rem",
                  "& .MuiOutlinedInput-notchedOutline": {
                    border: "none",
                  },
                  "& .MuiOutlinedInput-input": {
                    color: "#bfc0c1",
                    padding: "5px 10px",
                  },
                }}
              >
                <MenuItem value={"name"}>Name</MenuItem>
                <MenuItem value={"price"}>Price</MenuItem>
                <MenuItem value={"totalSales"}>Total Sales</MenuItem>
                <MenuItem value={"last30days"}>Last 30 days</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Box>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>
                <Typography
                  color="grey"
                  fontFamily="sans-serif"
                  fontSize="12px"
                >
                  Product Name
                </Typography>{" "}
              </TableCell>
              <TableCell align="right">
                <Typography
                  color="grey"
                  fontFamily="sans-serif"
                  fontSize="12px"
                >
                  Stock
                </Typography>
              </TableCell>
              <TableCell align="right">
                <Typography
                  color="grey"
                  fontFamily="sans-serif"
                  fontSize="12px"
                >
                  price
                </Typography>
              </TableCell>
              <TableCell align="right">
                <Typography
                  color="grey"
                  fontFamily="sans-serif"
                  fontSize="12px"
                >
                  Total Sales
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sortedProducts.map((product, index) => (
              <TableRow key={index}>
                <TableCell>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      style={{
                        width: 50,
                        height: 40,
                        objectFit: "cover",
                        borderRadius: "4px",
                        marginRight: "1rem",
                      }} // Added styles for image tag
                    />
                    <div>
                      <Typography variant="body1" fontWeight="bold">
                        {product.name}
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        fontWeight="lighter"
                        color="grey"
                      >
                        {product.description}
                      </Typography>
                    </div>
                  </Box>
                </TableCell>
                <TableCell align="right">
                  <Chip
                    label={`${product.stock} in stock`}
                    size="small"
                    sx={{
                      marginLeft: "4rem",
                    }}
                  />
                </TableCell>
                <TableCell align="right">
                  <Chip
                    label={`$ ${product.price}`}
                    size="small"
                    color="secondary"
                    sx={{
                      marginLeft: "1rem",
                    }}
                  />
                </TableCell>
                <TableCell align="right">
                  <Chip
                    label={`${product.totalSales}`}
                    size="small"
                    color="primary"
                    sx={{
                      marginLeft: "1rem",
                    }}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default ProductTable;
