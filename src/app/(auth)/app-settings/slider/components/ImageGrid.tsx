"use client";

import React, { useState } from "react";
import { ImageStatus, SliderImage } from "../Types";
import Image from "next/image";
import EditIconBtn from "@/components/buttons/action/EditIconBtn";
import ActivateIconBtn from "@/components/buttons/action/ActivateIconBtn";
import DeleteIconBtn from "@/components/buttons/action/DeleteIconBtn";
import toogleImageStatus from "../actions/ToogleImageStatus";
import delImage from "../actions/DeleteImage";
import { showToast } from "@/services/Toaster";
import { useRouter } from "next/navigation";
import { cn } from "@/utils/CssUtils";
import EditModal from "./EditModal";
import { useDisclosure } from "@heroui/react";
import { ResultWithoutData } from "@/api";

interface Props {
  images: SliderImage[];
}

const Actions = ({ image }: { image: SliderImage }) => {
  const { refresh } = useRouter();

  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const toggleStatus = async () => {
    const result = await toogleImageStatus(image.id);
    showToast(result);
    if (result.success) refresh();
    return result;
  };

  const deleteImage = async () => {
    const result = await delImage(image.id);
    showToast(result);
    if (result.success) refresh();
    return result;
  };

  const onEditSuccess = (result: ResultWithoutData) => {
    showToast(result);
    refresh();
  };

  return (
    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
      <EditIconBtn onClick={onOpen} />
      <EditModal image={image} isOpen={isOpen} onOpenChange={onOpenChange} onSuccess={onEditSuccess} />
      <ActivateIconBtn
        currentStatus={image.status == ImageStatus.PUBLISHED}
        onChange={toggleStatus}
      />
      <DeleteIconBtn onDelete={deleteImage} />
    </div>
  );
};

const ImageGrid: React.FC<Props> = ({ images }) => {
  return (
    <div className="grid grid-cols-4 gap-4 gap-y-10 p-4">
      {images.map((image) => (
        <div
          key={image.id}
          className="relative w-full h-48 overflow-hidden rounded-lg shadow-lg group"
        >
          <Image
            src={image.url}
            alt={`Image ${image.id}`}
            width={372}
            height={192}
            className={cn("w-full h-full object-cover", {
              "opacity-50": image.status == ImageStatus.UNPUBLISHED,
            })}
          />
          <Actions image={image} />
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;
