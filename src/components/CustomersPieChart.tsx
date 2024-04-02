import { Box, Typography } from "@mui/material";

import { PieChart, Pie, Cell, Legend } from "recharts";
import Customers from "../data/customer.json";

export default function CustomersPieChart() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      sx={{ borderRadius: 4 }}
    >
      <Box
        display="flex"
        justifyContent="space-between"
        width="100%"
        height="80%"
      >
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
      </Box>
      <PieChart width={270} height={270}>
        <Pie
          data={Customers.customerData}
          dataKey="value"
          innerRadius={70}
          outerRadius={100}
          startAngle={Customers.customerData[0].startAngle}
          endAngle={
            Customers.customerData[Customers.customerData.length - 1].endAngle
          }
        >
          {Customers.customerData.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={entry.fill}
              strokeWidth={entry.strokeWidth}
            />
          ))}
          <Legend verticalAlign="bottom" height={36} />
        </Pie>
      </PieChart>
    </Box>
  );
}
