import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid } from "recharts";
import earning from "../data/earning.json";

const YearlyBarChart = () => {
  const date = new Date();
  const monthName = date.toLocaleString("default", { month: "short" });

  return (
    <BarChart width={600} height={200} data={earning.barData}>
      <CartesianGrid
        strokeDasharray="3 3"
        stroke="transparent"
        horizontal={false}
      />

      <XAxis
        dataKey="month"
        axisLine={false}
        tickLine={false} // Hide tick lines
      />
      <YAxis hide={true} />

      <Bar dataKey="value" fill="#f1effe" radius={[10, 10, 10, 10]} />
    </BarChart>
  );
};

export default YearlyBarChart;
