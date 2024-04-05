import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";

import { PieChart, Pie, Tooltip, ResponsiveContainer } from "recharts";
import Customerdata from "../data/customerdata.json";

export default function Customers() {
  const [mobileView, setMobileView] = useState<boolean>(false);

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

  useEffect(() => {
    if (window.innerWidth < 600) {
      setMobileView(true);
    } else {
      setMobileView(false);
    }
  }, []);

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      sx={{ borderRadius: 4 }}
      p={1}
    >
      <Box
        display="flex"
        justifyContent="space-between"
        width="100%"
        height="80%"
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
      <Box width="100%" height={mobileView ? 250 : 300} px={1}>
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
              paddingAngle={0}
            />
            <Pie
              data={[{ value: 1 }, { value: 2 }, { value: 3 }]}
              dataKey="value"
              innerRadius={90}
              outerRadius={110}
              stroke="#FFFFFF"
              fill="#FFFFFF"
              startAngle={90}
              endAngle={460}
              paddingAngle={0}
            />
          </PieChart>
        </ResponsiveContainer>
      </Box>
    </Box>
  );
}
