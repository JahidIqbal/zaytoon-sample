"use client";

import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { TopAccounts } from "../../Types";

interface Props {
  title: string;
  fill: string;
  accounts: TopAccounts;
}

const TopAccountsChart = ({ title, fill, accounts }: Props) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">{title}</h2>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          data={accounts}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          layout="vertical"
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" />
          <YAxis type="category" dataKey="name" width={150} />
          <Tooltip />
          <Legend />
          <Bar dataKey="volume" name="Volume" fill={fill} layout="vertical" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TopAccountsChart;
