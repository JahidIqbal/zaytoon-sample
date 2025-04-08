import {
  Modal,
  ModalContent,
  ModalBody,
  ModalFooter,
  Button,
} from "@heroui/react";
import { useState } from "react";
import editImage from "../actions/EditImage";
import { EditFormData, SliderImage } from "../Types";
import { ResultWithoutData } from "@/api";
import InputField from "@/components/forms/InputField";
import Image from "next/image";

interface Props {
  image: SliderImage;
  isOpen: boolean;
  onOpenChange: () => void;
  onSuccess: (data: ResultWithoutData) => void;
}

function EditModal({ image, isOpen, onOpenChange, onSuccess }: Props) {
  const [formData, setFormData] = useState<EditFormData>(image);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const updateForm = <K extends keyof EditFormData>(
    key: K,
    value: EditFormData[K]
  ) => {
    setFormData((prevData) => ({
      ...prevData,
      [key]: value,
    }));
  };

  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      classNames={{ footer: "justify-end" }}
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalBody>
              <div className="p-4 flex flex-col gap-4 items-center">
                <h2 className="text-2xl font-bold">Update Slider Image</h2>

                <Image
                  className="w-full"
                  src={image.url}
                  alt="some slider"
                  width={300}
                  height={150}
                />

                <form className="w-full flex flex-col gap-6 pt-6 text-[#39363C] font-medium">
                  <InputField
                    label="Title"
                    id="title"
                    name="title"
                    type="text"
                    value={formData.title}
                    onChange={(e) => updateForm("title", e.target.value)}
                    required
                  />

                  <InputField
                    label="Target"
                    id="target"
                    name="target"
                    type="text"
                    value={formData.target}
                    onChange={(e) => updateForm("target", e.target.value)}
                  />
                </form>
              </div>
            </ModalBody>
            <ModalFooter>
              <Button
                color="primary"
                onPress={async () => {
                  setIsLoading(true);
                  const result = await editImage(image.id, formData);
                  setIsLoading(false);
                  if (result.success) {
                    onClose();
                    onSuccess(result);
                  }
                }}
              >
                {isLoading ? "Loading" : "Update"}
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}

export default EditModal;
