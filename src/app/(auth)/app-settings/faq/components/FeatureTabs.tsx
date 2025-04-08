"use client";

import React, { useState } from "react";
import { Tabs, Tab } from "@heroui/react";
import FaqListContainer from "./FaqListContainer";
import { FaqResponse, ModalData } from "../Types";
import { useDisclosure } from "@heroui/react";
import FaqModalForm from "./FaqModalForm";
import { normalizeSnakeCase } from "@/utils/StringUtils";

interface Props {
  faqs: FaqResponse;
}

function FeatureTabs({ faqs }: Props) {
  const { isOpen, onOpen } = useDisclosure();
  const [modalData, setModalData] = useState<ModalData>({});

  const openModalForm = (modalData: ModalData) => {
    setModalData(modalData);
    onOpen();
  };

  const onModalChange = (isOpen: boolean) => {
    if (isOpen) return;

    setModalData({});
  };

  const hasModalData =
    modalData.faq != undefined || modalData.feature != undefined;

  return (
    <>
      <Tabs
        aria-label="Options"
        classNames={{
          tabList: "mt-8 pl-8",
          tabContent: "group-data-[selected=true]:text-[#4BA361]",
          panel: "px-0",
        }}
        isVertical
      >
        {Object.entries(faqs).map(([k, v]) => (
          <Tab className="w-full" key={k} title={normalizeSnakeCase(k)}>
            <FaqListContainer
              openModalForm={openModalForm}
              feature={k}
              faqs={v}
            />
          </Tab>
        ))}
      </Tabs>
      {hasModalData && (
        <FaqModalForm
          data={modalData}
          isOpen={isOpen}
          onOpenChange={onModalChange}
        />
      )}
    </>
  );
}

export default FeatureTabs;
