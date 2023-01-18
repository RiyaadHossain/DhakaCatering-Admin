import React from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

export default function MonthlySales() {
  const data = [
    { name: "Jan", Sales: 400, /* pv: 2400, amt: 2400 */ },
    { name: "Feb", Sales: 600, /* pv: 5400, amt: 4400 */ },
    { name: "Mar", Sales: 300, /* pv: 1400, amt: 1400 */ },
    { name: "April", Sales: 700, /* pv: 7400, amt: 7400 */ },
    { name: "May", Sales: 800, /* pv: 8100, amt: 8400 */ },
    { name: "June", Sales: 650, /* pv: 6500, amt: 6500 */ },
  ];
  return (
    <LineChart width={680} height={300} data={data}>
      <Line type="monotone" dataKey="Sales" stroke="#8884d8" />
      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
    </LineChart>
  );
}
