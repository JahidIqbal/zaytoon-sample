"use client";

import React, { useState } from "react";
import { DndContext, DragEndEvent } from "@dnd-kit/core";
import { arrayMove, SortableContext } from "@dnd-kit/sortable";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { SliderImage } from "../Types";
import Image from "next/image";
import SecondaryBtn from "@/components/buttons/SecondaryBtn";
import reorderImages from "../actions/ReorderImages";
import { useRouter } from "next/navigation";
import { showToast } from "@/services/Toaster";

const SortableItem: React.FC<SliderImage> = ({ id, url }) => {
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
      className="realtive w-full h-48 overflow-hidden rounded-lg shadow-lg group cursor-grab"
    >
      <Image
        src={url}
        alt={`Image ${id}`}
        width={372}
        height={192}
        className="w-full h-full object-cover"
      />
    </div>
  );
};

interface Props {
  initialImages: SliderImage[];
  onReorder: () => void;
}

const ImageGridReorder: React.FC<Props> = ({ initialImages, onReorder }) => {
  const { refresh } = useRouter();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [images, setImages] = useState<SliderImage[]>(initialImages);

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (active.id !== over?.id) {
      setImages((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over?.id);
        return arrayMove(items, oldIndex, newIndex);
      });
    }
  };

  const updateOrder = async () => {
    setIsLoading(true);
    const res = await reorderImages(images.map(i => i.id));
    setIsLoading(false);

    showToast(res);
    if (res.success) {
      onReorder();
      refresh();
    }
  };

  return (
    <div className="flex flex-col">
      <DndContext onDragEnd={handleDragEnd}>
        <SortableContext items={images}>
          <div className="grid grid-cols-4 gap-4 gap-y-10 p-4">
            {images.map((image) => (
              <SortableItem key={image.id} {...image} />
            ))}
          </div>
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

export default ImageGridReorder;
