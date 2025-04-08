import React, { Suspense } from "react";
import StatsGrid from "./StatsGrid";
import { Stat } from "../../Types";

const mockStat = {
  customerCount: 10,
  bookPuchaseCount: 50,
  bookPuchaseAmount: 3000,
  customerTicketWallet: 1000,
  customerCoinWallet: 300,
};

async function StatsWithData() {
  // const stat = await get<Stat>("/api/v1/dashboard/all-stats");
  return <StatsGrid stat={mockStat} />;
}

export default function Stats() {
  const zero = {
    customerCount: 0,
    bookPuchaseCount: 0,
    bookPuchaseAmount: 0,
    customerTicketWallet: 0,
    customerCoinWallet: 0,
  };

  return (
    <Suspense fallback={<StatsGrid stat={zero} />}>
      <StatsWithData />
    </Suspense>
  );
}
