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
  Grid,
} from "@mui/material";
import { CiSearch } from "react-icons/ci";
import products from "../data/products.json";

const Products: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortValue, setSortValue] = useState("last30days");

  const handleSearchChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setSearchTerm(event.target.value);
  };

  const handleSortChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setSortValue(event.target.value);
  };

  const handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
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
      sx={{ width: "100%", overflowX: "auto" }}
      className="dashboard-container"
    >
      <TableContainer component={Paper}>
        <Grid
          container
          justifyContent="space-between"
          alignItems="center"
          mb={2}
          p={1}
        >
          <Grid item xs={12} md={6} style={{ overflow: "none" }}>
            <Typography
              variant="h6"
              fontWeight="bold"
              color="black"
              textAlign={{ xs: "center", md: "left" }}
            >
              Product Sell
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              display="flex"
              justifyContent={{ xs: "center", md: "flex-end" }}
            >
              <form onSubmit={handleSearchSubmit} style={{ marginRight: 10 }}>
                <TextField
                  id="search-product"
                  placeholder={` Search`}
                  variant="outlined"
                  size="small"
                  value={searchTerm}
                  onChange={handleSearchChange}
                  sx={{
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
              <FormControl size="small" sx={{ minWidth: 120 }}>
                <Select
                  value={sortValue}
                  onChange={handleSortChange}
                  inputProps={{
                    className: "select-input",
                  }}
                  sx={{
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
          </Grid>
        </Grid>
        <div style={{ overflowX: "scroll" }}>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell sx={{ minWidth: 200 }}>
                  <Typography color="grey" fontSize="12px">
                    Product Name
                  </Typography>
                </TableCell>
                <TableCell align="right" sx={{ minWidth: 100 }}>
                  <Typography color="grey" fontSize="12px">
                    Stock
                  </Typography>
                </TableCell>
                <TableCell align="right" sx={{ minWidth: 100 }}>
                  <Typography color="grey" fontSize="12px">
                    price
                  </Typography>
                </TableCell>
                <TableCell align="right" sx={{ minWidth: 100 }}>
                  <Typography color="grey" fontSize="12px">
                    Total Sales
                  </Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {sortedProducts.map((product, index) => (
                <TableRow key={index}>
                  <TableCell sx={{ minWidth: 200, borderBottom: "none" }}>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <img
                        src={product.image}
                        alt={product.name}
                        style={{
                          width: 50,
                          height: 40,
                          objectFit: "cover",
                          borderRadius: "4px",
                          marginRight: "1rem",
                        }}
                      />
                      <div>
                        <Typography variant="body1" fontWeight="bold">
                          {product.name}
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                          {product.description}
                        </Typography>
                      </div>
                    </Box>
                  </TableCell>
                  <TableCell
                    align="right"
                    sx={{ minWidth: 100, borderBottom: "none" }}
                  >
                    <Chip label={`${product.stock} in stock`} size="small" />
                  </TableCell>
                  <TableCell
                    align="right"
                    sx={{ minWidth: 100, borderBottom: "none" }}
                  >
                    <Chip
                      label={`$ ${product.price}`}
                      size="small"
                      color="secondary"
                    />
                  </TableCell>
                  <TableCell
                    align="right"
                    sx={{ minWidth: 100, borderBottom: "none" }}
                  >
                    <Chip
                      label={`${product.totalSales}`}
                      size="small"
                      color="primary"
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </TableContainer>
    </Box>
  );
};

export default Products;
