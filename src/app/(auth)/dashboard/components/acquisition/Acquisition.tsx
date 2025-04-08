import React, { Suspense } from "react";
import AcqusitionChart from "./AcqusitionChart";
import { Acqisition } from "../../Types";
import { get } from "@/api";
import { addQuery } from "@/utils/UrlUtil";
import { getAllDatesInMonth, getMonthAndYear } from "@/utils/DateUtils";

async function AcquisitionWithData() {
  // const res = await get<Acqisition>(
  //   addQuery("/api/v1/dashboard/user-acquisition", getMonthAndYear())
  // );

  const mockData = getAllDatesInMonth().map((d) => {
    return {
      date: d,
      users: Math.floor(Math.random() * 100), 
    };
  });
  return <AcqusitionChart data={mockData} />;
}

export default function Acquisition() {
  const zero = getAllDatesInMonth().map((d) => {
    return {
      date: d,
      users: 0,
    };
  });

  return (
    <Suspense fallback={<AcqusitionChart data={zero} />}>
      <AcquisitionWithData />
    </Suspense>
  );
}
