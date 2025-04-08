"use client";

import React, { useEffect } from "react";
import { useState } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Pagination as PaginationComponent,
} from "@heroui/react";
import { UserAcquisitionItem } from "../Types";
import { Pagination } from "@/types/Common";
import { useRouter, usePathname } from "next/navigation";
import { addPageQuery } from "@/utils/UrlUtil";

interface OnboardingStatsCountProps {
  data: UserAcquisitionItem[];
  pagination: Pagination;
}

const OnboardingStatsCount = ({
  data,
  pagination,
}: OnboardingStatsCountProps) => {
  const [currentPage, setCurrentPage] = useState(pagination?.currentpage || 0);
  const [currentPageData, setCurrentPageData] = useState(
    data.slice(
      currentPage * pagination?.currentpagetotalcount,
      (currentPage + 1) * pagination?.currentpagetotalcount
    )
  );

  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const start = currentPage * pagination?.currentpagetotalcount;
    const end = start + pagination?.currentpagetotalcount;
    setCurrentPageData(data.slice(start, end));
  }, [currentPage, data, pagination]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page - 1);
    router.push(addPageQuery(pathname, page));
  };

  const getTotalPageCount = (pagination: Pagination) => {
    return Math.ceil(
      pagination?.totalcount / pagination?.currentpagetotalcount
    );
  };

  return (
    <div>
      <Table aria-label="Onboarding Stats Table">
        <TableHeader>
          <TableColumn>DATE</TableColumn>
          <TableColumn>CUSTOMER COUNT</TableColumn>
          <TableColumn>MERCHANT COUNT</TableColumn>
        </TableHeader>

        <TableBody>
          {currentPageData.map(({ date, users, merchants }) => (
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
          Showing {currentPage * pagination?.currentpagetotalcount + 1} -{" "}
          {Math.min(
            (currentPage + 1) * pagination?.currentpagetotalcount,
            pagination?.totalcount
          )}{" "}
          of {pagination?.totalcount} records
        </h1>
        <PaginationComponent
          isCompact
          showControls
          showShadow
          color="success"
          page={currentPage + 1}
          total={getTotalPageCount(pagination)}
          onChange={handlePageChange}
          isDisabled={currentPage === getTotalPageCount(pagination) - 1}
        />
      </div>
    </div>
  );
};

export default OnboardingStatsCount;
