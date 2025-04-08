"use client"

import React from "react";
import { useState } from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell,Pagination as PaginationComponent } from "@heroui/react";
import { UserAcquisitionItem } from "../Types";
import { Pagination } from "@/types/Common";
import { useRouter, usePathname } from "next/navigation";
import { addPageQuery } from "@/utils/UrlUtil";

interface OnboardingStatsCountProps {
  data: UserAcquisitionItem[]; 
}

export default function MockOnboardingStatsCount() {
  const [data, setData] = useState([
    { date: "2025-01-01", users: 1000, merchants: 100 },
    { date: "2025-01-02", users: 1200, merchants: 200 },
    { date: "2025-01-03", users: 1300, merchants: 210 },
    { date: "2025-01-04", users: 1500, merchants: 250 },
    { date: "2025-01-05", users: 1750, merchants: 270 },
    { date: "2025-01-06", users: 2000, merchants: 280 },
    { date: "2025-01-07", users: 2500, merchants: 288 },
    { date: "2025-01-08", users: 2700, merchants: 300 },
    { date: "2025-01-09", users: 2750, merchants: 315 },
    { date: "2025-01-10", users: 2900, merchants: 320 },
    { date: "2025-01-11", users: 3000, merchants: 330 },
    { date: "2025-01-12", users: 3200, merchants: 340 },
    { date: "2025-01-13", users: 3500, merchants: 350 },
    { date: "2025-01-14", users: 3700, merchants: 360 },
    { date: "2025-01-15", users: 3900, merchants: 370 },
    { date: "2025-01-16", users: 4100, merchants: 380 },
    { date: "2025-01-17", users: 4200, merchants: 390 },
    { date: "2025-01-18", users: 4300, merchants: 400 },
    { date: "2025-01-19", users: 4400, merchants: 410 },
    { date: "2025-01-20", users: 4500, merchants: 420 },
    { date: "2025-01-21", users: 4600, merchants: 430 },
    { date: "2025-01-22", users: 4700, merchants: 440 },
    { date: "2025-01-23", users: 4800, merchants: 450 },
    { date: "2025-01-24", users: 4900, merchants: 460 },
    { date: "2025-01-25", users: 5000, merchants: 470 },
    { date: "2025-01-26", users: 5100, merchants: 480 },
    { date: "2025-01-27", users: 5200, merchants: 490 },
    { date: "2025-01-28", users: 5300, merchants: 500 },
    { date: "2025-01-29", users: 5400, merchants: 510 },
    { date: "2025-01-30", users: 5500, merchants: 520 },
  ]);

  const [pagination, setPagination] = useState<Pagination>({
    totalcount: data.length,
    currentpage: 0,
    currentpagetotalcount: 10, 
    hasnext: true,
  });

  const router = useRouter();
  const pathname = usePathname();

  const handlePageChange = (page: number) => {
    setPagination((prevState) => ({
      ...prevState,
      currentpage: page - 1, 
    }));
    router.push(addPageQuery(pathname, page)); 
  };

  const getTotalPageCount = (pagination: Pagination) => {
    return Math.ceil(pagination.totalcount / pagination.currentpagetotalcount);
  };

  const currentData = data.slice(
    pagination.currentpage * pagination.currentpagetotalcount,
    (pagination.currentpage + 1) * pagination.currentpagetotalcount
  );
  

  return (
    <div>
      <Table aria-label="Onboarding Stats Table">
        <TableHeader>
          <TableColumn>DATE</TableColumn>
          <TableColumn>CUSTOMER COUNT</TableColumn>
          <TableColumn>MERCHANT COUNT</TableColumn>
        </TableHeader>

        <TableBody>
          {currentData.map(({ date, users, merchants }) => (
            <TableRow key={date}>
              <TableCell>{date}</TableCell>
              <TableCell>{users}</TableCell>
              <TableCell>{merchants}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <div className="flex w-full justify-between mt-4">
        <h1>
          Showing {pagination.currentpage * pagination.currentpagetotalcount + 1} -{" "}
          {Math.min(
            (pagination.currentpage + 1) * pagination.currentpagetotalcount,
            pagination.totalcount
          )}{" "}
          of {pagination.totalcount} records
        </h1>
        <PaginationComponent
          isCompact
          showControls
          showShadow
          color="success"
          page={pagination.currentpage + 1} 
          total={getTotalPageCount(pagination)}
          onChange={handlePageChange}
          isDisabled={pagination.currentpage === getTotalPageCount(pagination) - 1}
        />
      </div>
    </div>
  );
}
