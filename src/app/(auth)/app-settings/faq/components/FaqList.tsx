"use client";

import React from "react";
import { Faq, OpenModalForm } from "../Types";
import EditIconBtn from "@/components/buttons/action/EditIconBtn";
import DeleteIconBtn from "@/components/buttons/action/DeleteIconBtn";
import delQuestion from "../actions/DeleteQuestion";
import { showToast } from "@/services/Toaster";
import { useRouter } from "next/navigation";
import { Accordion, AccordionItem } from "@heroui/react";

interface Props {
  faqs: Faq[];
  openModalForm: OpenModalForm;
}

const FaqList: React.FC<Props> = ({ faqs, openModalForm }) => {
  const { refresh } = useRouter();

  const deleteQuestion = async (faq: Faq) => {
    const result = await delQuestion(faq.id);
    showToast(result);
    if (result.success) refresh();
    return result;
  };

  if (faqs.length == 0)
    return (
      <div className="w-full text-center my-6">
        <span className="font-medium">No Data Found!</span>
      </div>
    );

  return (
    <Accordion variant="splitted" className="px-0 mt-6">
      {faqs.map((faq) => (
        <AccordionItem
          key={faq.id}
          aria-label={faq.question}
          title={faq.question}
        >
          <div className="flex flex-col gap-2">
            <span>{faq.answer}</span>
            <div className="flex gap-1 items-center justify-end">
              <EditIconBtn onClick={() => openModalForm({ faq })} />
              <DeleteIconBtn onDelete={() => deleteQuestion(faq)} />
            </div>
          </div>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default FaqList;
