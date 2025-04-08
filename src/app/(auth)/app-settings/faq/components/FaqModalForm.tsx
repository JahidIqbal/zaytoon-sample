import {
  Modal,
  ModalContent,
  ModalBody,
  ModalFooter,
  Button,
} from "@heroui/react";
import { ModalData } from "../Types";
import InputField from "@/components/forms/InputField";
import useFaqForm from "../hooks/useFaqForm";
import TextField from "@/components/forms/TextField";

interface Props {
  data: ModalData;
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
}

function FaqModalForm({ data, isOpen, onOpenChange }: Props) {
  const { formData, updateForm, handleSubmit, isLoading } = useFaqForm(data);

  const actionLabel = data.faq ? "Update" : "Create";

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
                <h2 className="text-2xl font-bold">{actionLabel} FAQ</h2>

                <form className="w-full flex flex-col gap-6 pt-6 text-[#39363C] font-medium">
                  <InputField
                    label="Question"
                    id="question"
                    name="question"
                    type="text"
                    value={formData.question}
                    onChange={(e) => updateForm("question", e.target.value)}
                    required
                  />

                  <TextField
                    label="Answer"
                    id="answer"
                    name="answer"
                    value={formData.answer}
                    onChange={(e) => updateForm("answer", e.target.value)}
                    required
                  />
                </form>
              </div>
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onPress={() => handleSubmit(onClose)}>
                {isLoading ? "Loading" : actionLabel}
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}

export default FaqModalForm;
