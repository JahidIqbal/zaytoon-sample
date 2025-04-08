import React from "react";
import StatCard from "./StatCard";
import { Stat } from "../../Types";

interface Props {
  stat: Stat;
}

function StatsGrid({ stat }: Props) {
  return (
    <div className="grid grid-cols-4 gap-4 mb-6">
      <StatCard
        title="Total Customer Count"
        value={stat.customerCount}
        icon="👤"
        bgColor="bg-blue-50"
        textColor="text-blue-600"
      />
      <StatCard
        title="Total Customer Coin Wallet"
        value={stat.customerCoinWallet}
        icon="💰"
        bgColor="bg-purple-50"
        textColor="text-purple-600"
      />
      <StatCard
        title="Total Customer Ticket Wallet"
        value={stat.customerTicketWallet}
        prefix="৳"
        icon="🏦"
        bgColor="bg-yellow-50"
        textColor="text-yellow-600"
      />

      <StatCard
        title="Book Purchase Count"
        value={stat.bookPuchaseAmount}
        icon="🔄"
        bgColor="bg-pink-50"
        textColor="text-pink-600"
      />
      <StatCard
        title="Book Purchase Amount"
        value={stat.bookPuchaseCount}
        prefix="৳"
        icon="📊"
        bgColor="bg-indigo-50"
        textColor="text-indigo-600"
      />
    </div>
  );
}

export default StatsGrid;
