import {
  Modal,
  ModalContent,
  ModalBody,
  ModalFooter,
  Button,
} from "@heroui/react";
import { UserType } from "../Types";
import InputField from "@/components/forms/InputField";
import useAddForm from "../hooks/useAddForm";

interface Props {
  userType: UserType;
  isOpen: boolean;
  onOpenChange: () => void;
  onSuccess: () => void;
}

function AddModal({ userType, isOpen, onOpenChange, onSuccess }: Props) {
  const {
    formData,
    updateForm,
    handleImageUpload,
    handleSubmit,
    isLoading,
    uploadedImage,
  } = useAddForm({
    userType,
    onSuccess,
  });

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
                <h2 className="text-2xl font-bold">Upload New Slider Image</h2>

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

                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Upload an image
                    </label>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                    />
                  </div>
                  <div className="mb-6 w-full h-100 rounded-lg overflow-hidden shadow-lg border-2 border-gray-300 flex items-center justify-center">
                    {uploadedImage ? (
                      <img
                        src={uploadedImage || ""}
                        alt="Selected"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <span className="text-gray-500">No image selected</span>
                    )}
                  </div>
                </form>
              </div>
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onPress={() => handleSubmit(onClose)}>
                {isLoading ? "Loading" : "Upload"}
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}

export default AddModal;
