import React, { Suspense } from "react";
import IncomeVsExpenseChart from "./IncomeVsExpenseChart";
import { RevenueResponse } from "../../Types";
import { get } from "@/api";
import { addQuery } from "@/utils/UrlUtil";
import { getAllDatesInMonth, getMonthAndYear } from "@/utils/DateUtils";
import { createTk } from "@/utils/PoysaUtil";

async function IncomeVsExpenseChartWithData() {
  // Commented out the actual API call
  // const res = await get<RevenueResponse>(
  //   addQuery("/api/v1/dashboard/income-expense-by-month", getMonthAndYear())
  // );


  const staticResponse: RevenueResponse = {
    incomeExpenseData: [
      { date: '2025-03-01', income: 5000, expense: 2000 },
      { date: '2025-03-02', income: 6000, expense: 2500 },
      { date: '2025-03-03', income: 4500, expense: 1500 },
      { date: '2025-03-04', income: 7000, expense: 3000 },
    ],
  };

  const data = staticResponse.incomeExpenseData.map((d) => {
    return {
      ...d,
      income: createTk(d.income),
      expense: createTk(d.expense),
    };
  });

  return <IncomeVsExpenseChart data={data} />;
}

export default function Revenue() {
  
  const zero = getAllDatesInMonth().map((d) => {
    return {
      date: d,
      income: 0,
      expense: 0,
    };
  });

  return (
    <Suspense fallback={<IncomeVsExpenseChart data={zero} />}>
      <IncomeVsExpenseChartWithData />
    </Suspense>
  );
}
