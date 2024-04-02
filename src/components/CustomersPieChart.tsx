import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";

import { PieChart, Pie, Cell, Legend } from "recharts";
import Customers from "../data/customer.json";

export default function CustomersPieChart() {
  const [totalNew, setTotalNew] = useState(0);
  useEffect(() => {
    let newTotal = 0;
    Customers.customerData.forEach((val) => {
      if (val.type === "new") {
        newTotal += val.value;
      }
    });
    setTotalNew(newTotal);
  }, []);
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
        <text
          x={135}
          y={120}
          textAnchor="middle"
          dominantBaseline="middle"
          fontSize={30}
          fontWeight="bold"
        >
          {`${totalNew}%`}
        </text>
        <text
          x={130}
          y={144}
          textAnchor="middle"
          dominantBaseline="middle"
          fontSize={16}
          fontWeight={400}
          fill="#222222"
        >
          Total New
        </text>
        <text
          x={132}
          y={160}
          textAnchor="middle"
          dominantBaseline="middle"
          fontSize={17}
          fontWeight={400}
          fill="#222222"
        >
          Customers
        </text>
        <Pie
          data={Customers.customerData}
          dataKey="value"
          innerRadius={70}
          outerRadius={85}
          startAngle={90}
          endAngle={460}
        >
          {Customers.customerData.map((entry, index) => (
            <Cell key={`cell-${index + 2}`} fill={entry.fill} />
          ))}

          <Legend verticalAlign="bottom" height={36} />
        </Pie>
      </PieChart>
    </Box>
  );
}
