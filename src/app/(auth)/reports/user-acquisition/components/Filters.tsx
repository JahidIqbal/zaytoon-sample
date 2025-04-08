"use client";

import React from "react";
import ReportDateRange from "../../components/ReportDateRange";

function Filters() {
  return (
    <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
      <ReportDateRange />
    </div>
  );
}

export default Filters;
