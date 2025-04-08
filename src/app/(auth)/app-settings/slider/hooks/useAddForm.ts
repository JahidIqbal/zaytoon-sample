import { useState } from "react";
import { AddFormData, UserType } from "../Types";
import addImage from "../actions/AddImage";
import { showToast } from "@/services/Toaster";

interface Props {
  userType: UserType;
  onSuccess: () => void;
}

const useAddForm = ({ userType, onSuccess }: Props) => {
  const [formData, setFormData] = useState<AddFormData>({
    userType,
    title: "",
    target: "",
    file: undefined,
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);

  const updateForm = <K extends keyof AddFormData>(
    key: K,
    value: AddFormData[K]
  ) => {
    setFormData((prevData) => ({
      ...prevData,
      [key]: value,
    }));
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file == undefined) return;

    updateForm("file", file);
    const reader = new FileReader();
    reader.onload = (e) => {
      setUploadedImage(e.target?.result as string);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (onClose: () => void) => {
    if (!formData.file) return;

    setIsLoading(true);
    const result = await addImage(formData);
    setIsLoading(false);

    showToast(result);

    if (result.success) {
      setFormData({
        userType,
        title: "",
      });
      setUploadedImage(null);
      onClose();
      onSuccess();
    }
  };

  return {
    isLoading,
    formData,
    updateForm,
    handleImageUpload,
    uploadedImage,
    handleSubmit,
  };
};

export default useAddForm;
