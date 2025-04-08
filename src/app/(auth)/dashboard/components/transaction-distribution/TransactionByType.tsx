"use client";

import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const CUSTOMER_TRANSACTION_TYPE_COLORS: { [key: string]: string } = {
  "Add Fund": "#3182CE",
  "Top Up": "#38A169",
  Payment: "#D53F8C",
  "Bill Payment": "#DD6B20",
  "Send Money": "#FF6347",
  "Fund Transfer": "#8A2BE2",
};

const MERCHANT_TRANSACTION_TYPE_COLORS: { [key: string]: string } = {
  "Add Fund": "#3182CE",
  Settlement: "#38A169",
  "Send Money": "#D53F8C",
  "Bulk Disbursement": "#DD6B20",
};

interface Props {
  title: string;
  transactionTypes: { name: string; value: number }[];
  isMerchant?: boolean;
}

const TransactionByType = ({
  title,
  transactionTypes,
  isMerchant = false,
}: Props) => {
  const COLORS = isMerchant
    ? MERCHANT_TRANSACTION_TYPE_COLORS
    : CUSTOMER_TRANSACTION_TYPE_COLORS;

  const filteredTransactionTypes = transactionTypes.filter(
    (entry) => entry.value > 0
  );

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">{title}</h2>
      <ResponsiveContainer width="100%" height={400}>
        <PieChart>
          <Pie
            data={filteredTransactionTypes}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
            label
          >
            {filteredTransactionTypes.map((entry, index) => {
              const color = COLORS[entry.name] || "#8884d8";
              return <Cell key={`cell-${index}`} fill={color} />;
            })}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TransactionByType;
