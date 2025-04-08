"use client";

import PageContainer from "@/components/layout/PageContainer";
import React, { useState } from "react";
import { Faq, OpenModalForm } from "../Types";
import DraggableFaqList from "./DraggableFaqList";
import FaqList from "./FaqList";
import SecondaryBtn from "@/components/buttons/SecondaryBtn";
import ReorderBtn from "@/components/buttons/ReorderBtn";
import { normalizeSnakeCase } from "@/utils/StringUtils";

interface Props {
  feature: string;
  faqs: Faq[];
  openModalForm: OpenModalForm;
}

function FaqListContainer({ feature, faqs, openModalForm }: Props) {
  const [isOrdering, setIsOrdering] = useState(false);

  const onReorder = () => setIsOrdering(false);

  return (
    <PageContainer
      title={normalizeSnakeCase(feature)}
      rightBtn={
        <div className="flex gap-4">
          {faqs.length > 1 && (
            <ReorderBtn isOrdering={isOrdering} setIsOrdering={setIsOrdering} />
          )}
          <SecondaryBtn
            isLoading={false}
            onClick={() => openModalForm({ feature })}
            icon="add"
            btnType="Add New"
            removeMargin
          />
        </div>
      }
    >
      {!isOrdering && <FaqList faqs={faqs} openModalForm={openModalForm} />}
      {isOrdering && <DraggableFaqList initialFaqs={faqs} onReorder={onReorder} />}
    </PageContainer>
  );
}

export default FaqListContainer;
