"use client";

import PageContainer from "@/components/layout/PageContainer";
import React, { useState } from "react";
import { SliderImage, UserType } from "../Types";
import ImageGridReorder from "./ImageGridReorder";
import ImageGrid from "./ImageGrid";
import SecondaryBtn from "@/components/buttons/SecondaryBtn";
import { useRouter } from "next/navigation";
import { useDisclosure } from "@heroui/react";
import AddModal from "./AddModal";
import ReorderBtn from "@/components/buttons/ReorderBtn";

interface Props {
  userType: UserType;
  title: string;
  images: SliderImage[];
}

function ImagesContainer({ userType, title, images }: Props) {
  const { refresh } = useRouter();

  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [isOrdering, setIsOrdering] = useState(false);

  const onEditSuccess = () => {
    refresh();
  };

  const onReorder = () => {
    setIsOrdering(false);
  };

  return (
    <PageContainer
      title={title}
      rightBtn={
        <div className="flex gap-4">
          {images.length > 1 && (
            <ReorderBtn isOrdering={isOrdering} setIsOrdering={setIsOrdering} />
          )}
          <SecondaryBtn
            isLoading={false}
            onClick={onOpen}
            icon="add"
            btnType="Add New Image"
            removeMargin
          />
        </div>
      }
    >
      {!isOrdering && <ImageGrid images={images} />}
      {isOrdering && <ImageGridReorder initialImages={images} onReorder={onReorder} />}

      <AddModal
        userType={userType}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        onSuccess={onEditSuccess}
      />
    </PageContainer>
  );
}

export default ImagesContainer;
