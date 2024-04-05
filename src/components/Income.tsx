import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Cell,
  ResponsiveContainer,
} from "recharts";
import earning from "../data/earning.json";
import { Box, Typography, FormControl, MenuItem, Select } from "@mui/material";
import { useLocation } from "react-router-dom";
const Income = () => {
  const location = useLocation();
  const [mobileView, setMobileView] = useState<boolean>(false);

  const sortValue = "Quartly";

  useEffect(() => {
    if (window.innerWidth < 600) {
      setMobileView(true);
    } else {
      setMobileView(false);
    }
  }, []);

  useEffect(() => {
    if (location) {
      console.log("this", location);
    }
  }, [location]);
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      p={1}
      className="dashboard-container"
    >
      <Box display="flex" justifyContent="space-between" width="100%">
        <Box>
          <Typography
            color="black"
            fontFamily="sans-serif"
            fontWeight="bold"
            variant="h5"
          >
            Overview
          </Typography>
          <Typography color="grey" fontFamily="sans-serif" fontSize="12px">
            Monthly Earning
          </Typography>
        </Box>
        <FormControl size="small" hiddenLabel>
          <Select
            value={sortValue}
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
            <MenuItem value={"Quartly"}>Quartly</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <ResponsiveContainer
        width="100%"
        height={mobileView ? 200 : 300}
        style={{ top: 5, bottom: 5, left: 10, right: 10 }}
      >
        <BarChart data={earning.barData}>
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="transparent"
            horizontal={false}
          />
          <XAxis
            dataKey="month"
            axisLine={false}
            tickLine={false}
            {...{
              tick: {
                fontSize: 10,
                transform: "rotate(-60deg)",
              },
              tickAngle: -60,
            }}
          />
          <YAxis hide={true} />
          <Bar
            dataKey="value"
            className="bar-view"
            radius={mobileView ? [5, 5, 5, 5] : [10, 10, 10, 10]}
          >
            {earning.barData.map((val, index) => (
              <Cell
                key={`cell-${index + 1}`}
                fill={val.month === "Jul" ? "#5235e5" : "#f1effe"}
                fontSize={20}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default Income;
