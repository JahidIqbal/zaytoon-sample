import { useState } from "react";
import { FormData, ModalData } from "../Types";
import addQuestion from "../actions/AddQuestion";
import editQuestion from "../actions/EditQuestion";
import { showToast } from "@/services/Toaster";
import { useRouter } from "next/navigation";

const useFaqForm = (data: ModalData) => {
  const { refresh } = useRouter();
  
  const {faq, feature} = data;
  
  const [formData, setFormData] = useState<FormData>({
    feature: feature ?? faq!.feature!,
    question: faq?.question ?? "",
    answer: faq?.answer ?? "",
  });
  
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const updateForm = <K extends keyof FormData>(key: K, value: FormData[K]) => {
    setFormData((prevData) => ({
      ...prevData,
      [key]: value,
    }));
  };

  const handleSubmit = async (onClose: () => void) => {
    if (!formData.question || !formData.answer) return;
    if (!faq && !formData.feature) return;

    setIsLoading(true);
    const result = faq
      ? await editQuestion(faq.id, formData)
      : await addQuestion(formData as Required<FormData>);
    setIsLoading(false);

    showToast(result);

    if (result.success) {
      onClose();
      refresh();
    }
  };

  return {
    isLoading,
    formData,
    updateForm,
    handleSubmit,
  };
};

export default useFaqForm;
