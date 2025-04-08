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
import { TransactionOnDate } from "../../Types";

interface Props {
  data: TransactionOnDate[];
}

function TransactionOverTimeChart({ data }: Props) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        Transactions Over Time
      </h2>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis yAxisId="left" orientation="left" stroke="#DB2777" />
          <YAxis yAxisId="right" orientation="right" stroke="#4F46E5" />
          <Tooltip />
          <Legend />
          <Bar yAxisId="left" dataKey="count" name="Count" fill="#DB2777" />
          <Bar
            yAxisId="right"
            dataKey="volume"
            name="Volume (৳)"
            fill="#4F46E5"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default TransactionOverTimeChart;
