"use client";

import React, { useState } from "react";
import { Tabs, Tab, Tooltip } from "@heroui/react";
import { PoliciesResponse } from "../Types";
import { useDisclosure } from "@heroui/react";
import { normalizeSnakeCase } from "@/utils/StringUtils";
import UpdateForm from "./UpdateForm";
import PageContainer from "@/components/layout/PageContainer";
import PreviewModal from "./PreviewModal";
import { FaEye } from "react-icons/fa6";

interface Props {
  policies: PoliciesResponse;
}

function FeatureTabs({ policies }: Props) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [preview, setPreview] = useState<string | undefined>(undefined);

  const openPreviewModal = (preview: string) => {
    setPreview(preview);
    onOpen();
  };

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
        {Object.entries(policies).map(([k, v]) => (
          <Tab className="w-full" key={k} title={normalizeSnakeCase(k)}>
            <PageContainer
              title={normalizeSnakeCase(k)}
              rightBtn={
                <Tooltip content="Preview">
                  <button
                    className="flex justify-center items-center rounded-lg gap-2 px-3 2xl:px-4 py-2 2xl:py-3 text-white font-medium 2xl:font-bold text-base 2xl:text-lg bg-blue-500"
                    onClick={() => {
                      openPreviewModal(v);
                    }}
                  >
                    <FaEye className="text-white h-4 w-4" />
                  </button>
                </Tooltip>
              }
            >
              <UpdateForm feature={k} html={v} />
            </PageContainer>
          </Tab>
        ))}
      </Tabs>
      {preview && (
        <PreviewModal
          html={preview}
          isOpen={isOpen}
          onOpenChange={onOpenChange}
        />
      )}
    </>
  );
}

export default FeatureTabs;
