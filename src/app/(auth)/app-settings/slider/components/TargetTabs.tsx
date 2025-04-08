"use client";

import React, { ReactNode } from "react";
import { Tabs, Tab } from "@heroui/react";
import { GrUserFemale } from "react-icons/gr";
import { MdAddBusiness } from "react-icons/md";

interface Props {
  customer: ReactNode;
  merchant: ReactNode;
}

function TargetTabs({ customer, merchant }: Props) {
  return (
    <Tabs
      aria-label="Options"
      size="lg"
      classNames={{
        tabList: "mt-8 px-8",
        tabContent: "group-data-[selected=true]:text-[#4BA361]",
      }}
    >
      <Tab
        key="customer"
        title={
          <div className="flex items-center space-x-2">
            <GrUserFemale />
            <span>Customers</span>
          </div>
        }
      >
        {customer}
      </Tab>
      <Tab
        key="merchant"
        title={
          <div className="flex items-center space-x-2">
            <MdAddBusiness />
            <span>Merchants</span>
          </div>
        }
      >
        {merchant}
      </Tab>
    </Tabs>
  );
}

export default TargetTabs;
