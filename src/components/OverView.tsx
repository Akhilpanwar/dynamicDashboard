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

const YearlyBarChart = () => {
  const sortValue = "Quartly";
  // const date = new Date();
  // const monthName = date.toLocaleString("default", { month: "short" });

  return (
    <Box display="flex" flexDirection="column" alignItems="center" p={1}>
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
            <MenuItem value={"Quartly"}>Quartly</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <ResponsiveContainer
        width="100%"
        height={300}
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
              tick: { fontSize: 12, transform: "rotate(-60deg)" },
              tickAngle: -60,
            }}
          />
          <YAxis hide={true} />
          <Bar dataKey="value" radius={[10, 10, 10, 10]}>
            <Cell key="cell-0" fill="#f1effe" />
            {earning.barData.map((val, index) => (
              <Cell
                key={`cell-${index + 1}`}
                fill={val.month === "Jul" ? "#5235e5" : "#f1effe"}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default YearlyBarChart;
