"use client";

import React, { useState } from "react";
import { DndContext, DragEndEvent } from "@dnd-kit/core";
import { arrayMove, SortableContext } from "@dnd-kit/sortable";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Faq } from "../Types";
import SecondaryBtn from "@/components/buttons/SecondaryBtn";
import reorderQuestions from "../actions/ReorderQuestions";
import { useRouter } from "next/navigation";
import { showToast } from "@/services/Toaster";

const SortableItem: React.FC<Faq> = ({ id, question }) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="realtive w-full overflow-hidden bg-content1 rounded-medium shadow-medium cursor-grab p-4"
    >
      {question}
    </div>
  );
};

interface Props {
  initialFaqs: Faq[];
  onReorder: () => void;
}

const DraggableFaqList: React.FC<Props> = ({ initialFaqs, onReorder }) => {
  const { refresh } = useRouter();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [questions, setQuestions] = useState<Faq[]>(initialFaqs);

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (active.id !== over?.id) {
      setQuestions((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over?.id);
        return arrayMove(items, oldIndex, newIndex);
      });
    }
  };

  const updateOrder = async () => {
    setIsLoading(true);
    const res = await reorderQuestions(questions.map((i) => i.id));
    setIsLoading(false);

    showToast(res);
    if (res.success) {
      onReorder();
      refresh();
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <DndContext onDragEnd={handleDragEnd}>
        <SortableContext items={questions}>
          {questions.map((question) => (
            <SortableItem key={question.id} {...question} />
          ))}
        </SortableContext>
      </DndContext>
      <div className="flex justify-center items-center">
        <SecondaryBtn
          btnType="Update"
          isLoading={isLoading}
          onClick={updateOrder}
        />
      </div>
    </div>
  );
};

export default DraggableFaqList;
