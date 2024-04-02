import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";

import { PieChart, Pie, Cell, Legend, ResponsiveContainer } from "recharts";
import Customerdata from "../data/customerdata.json";

export default function Customers() {
  const [totalNew, setTotalNew] = useState(0);

  useEffect(() => {
    let newTotal = 0;
    Customerdata.customerData.forEach((val) => {
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
      p={1}
      className="dashboard-container"
    >
      <Box
        display="flex"
        justifyContent="space-between"
        width="100%"
        height="80%"
        px={2}
      >
        <Box display="flex" flexDirection="column" alignItems="self-start">
          <Typography
            color="black"
            fontFamily="sans-serif"
            fontWeight="bold"
            variant="h5"
          >
            Customers
          </Typography>
          <Typography
            color="grey"
            fontFamily="sans-serif"
            fontSize="12px"
            align="center"
          >
            Customer that buy products
          </Typography>
        </Box>
      </Box>
      <Box width="100%" height={300} px={2}>
        <ResponsiveContainer>
          <PieChart>
            <text
              x="50%"
              y="44%"
              textAnchor="middle"
              dominantBaseline="middle"
              fontSize={30}
              fontWeight="bold"
            >
              {`${totalNew}%`}
            </text>
            <text
              x="50%"
              y="51%"
              textAnchor="middle"
              dominantBaseline="middle"
              fontSize={16}
              fontWeight={400}
              fill="#222222"
            >
              Total New
            </text>
            <text
              x="50%"
              y="57%"
              textAnchor="middle"
              dominantBaseline="middle"
              fontSize={17}
              fontWeight={400}
              fill="#222222"
            >
              Customers
            </text>
            <Pie
              data={Customerdata.customerData}
              dataKey="value"
              innerRadius={70}
              outerRadius={85}
              startAngle={90}
              endAngle={460}
            >
              {Customerdata.customerData.map((entry, index) => (
                <Cell key={`cell-${index + 2}`} fill={entry.fill} />
              ))}
              <Legend verticalAlign="bottom" height={36} />
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </Box>
    </Box>
  );
}
