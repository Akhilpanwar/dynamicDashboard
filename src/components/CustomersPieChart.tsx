import React, { useCallback, useState, useEffect } from "react";
import { PieChart, Pie, Cell, Legend } from "recharts";

interface DataPoint {
  name: string;
  value: number;
  strokeWidth?: number;
  innerRadius: number;
  outerRadius: number;
  fill: string;
  width?: number;
}

const data: DataPoint[] = [
  {
    name: "Group c",
    value: 75,
    strokeWidth: 3,
    fill: "#f0effb",
    innerRadius: 70,
    outerRadius: 90,
  },
  {
    name: "Group A",
    value: 70,
    strokeWidth: 5,
    fill: "#4e34e3",
    innerRadius: 100,
    outerRadius: 140,
  },
  {
    name: "Group B",
    value: 40,
    strokeWidth: 10,
    fill: "#d23b96",
    innerRadius: 70,
    outerRadius: 110,
  },
];
export default function CustomersPieChart() {
  return (
    <PieChart width={270} height={300}>
      <Pie data={data} dataKey="value" innerRadius={70} outerRadius={100}>
        {data.map((entry, index) => (
          <Cell
            key={`cell-${index}`}
            fill={entry.fill}
            strokeWidth={entry.strokeWidth}
          />
        ))}
      </Pie>
    </PieChart>
  );
}
