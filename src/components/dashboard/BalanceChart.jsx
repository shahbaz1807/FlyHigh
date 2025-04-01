import React from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const BalanceChart = () => {
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div
          className="custom-tooltip"
          style={{
            backgroundColor: "#212529",
            padding: "10px",
            borderRadius: "5px",
            color: "#fff",
          }}
        >
          <p className="label">{`${label}`}</p>
          <p className="value">{` 
                                                                                                                              ${payload[0].value.toLocaleString()}`}</p>
        </div>
      );
    }
    return null;
  };

  // Sample data for monthly balance
  const data = [
    { month: "Jan", balance: 2500 },
    { month: "Feb", balance: 3200 },
    { month: "Mar", balance: 2800 },
    { month: "Apr", balance: 3500 },
    { month: "May", balance: 4200 },
    { month: "Jun", balance: 3800 },
    { month: "Jul", balance: 4500 },
    { month: "Aug", balance: 5200 },
    { month: "Sep", balance: 4800 },
    { month: "Oct", balance: 5500 },
    { month: "Nov", balance: 4200 },
    { month: "Dec", balance: 3800 },
  ];

  return (
    <div className="h-auto rounded-2xl border border-[#bdbdbd31] bg-[#2e2e2e] px-7 py-7">
      <div className="mb-9">
        <h1 className="font-worksans text-4xl text-primary">Total Balance</h1>
        <p className="text-zinc-500 mt-2">
          Lorem ipsum, dolor sit amet consectetur adipisicing.
        </p>
      </div>
      <div className="h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 20,
            }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="rgba(255, 255, 255, 0.1)"
              vertical={false}
            />
            <XAxis
              dataKey="month"
              tick={{ fill: "rgba(255, 255, 255, 0.7)", fontSize: 12 }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              tick={{ fill: "rgba(255, 255, 255, 0.7)", fontSize: 12 }}
              axisLine={false}
              tickLine={false}
              tickFormatter={(value) => `$${value}`}
              domain={[0, "dataMax + 1000"]}
            />
            <Tooltip
              content={<CustomTooltip />}
              cursor={{ stroke: "rgba(255, 255, 255, 0.2)" }}
            />
            <Line
              type="monotone"
              dataKey="balance"
              stroke="#4FD1C5"
              strokeWidth={5}
              dot={false}
              activeDot={{
                r: 6,
                fill: "#4FD1C5",
                stroke: "#fff",
                strokeWidth: 2,
              }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BalanceChart;
