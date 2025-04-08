import React from "react";
import Stats from "./components/stats/Stats";
import Acqusition from "./components/acquisition/Acquisition";
import Revenue from "./components/revenue/Revenue";
import TransactionDistribution from "./components/transaction-distribution/TransactionDistribution";

const Dashboard: React.FC = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <section className="mb-8">
        <Stats />
      </section>

      <section className="mb-8">
        <Acqusition />
      </section>

      <section className="w-full mb-8 flex gap-4">
        <TransactionDistribution />
      </section>
      
    </div>
  );
};

export default Dashboard;
