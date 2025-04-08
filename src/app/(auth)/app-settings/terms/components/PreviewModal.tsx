import { Modal, ModalContent, ModalBody } from "@heroui/react";
import DOMPurify from "dompurify";

interface Props {
  html: string;
  isOpen: boolean;
  onOpenChange: () => void;
}

function PreviewModal({ html, isOpen, onOpenChange }: Props) {
  const safeHTML = DOMPurify.sanitize(html);

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
                <h2 className="text-2xl font-bold">Preview</h2>
              </div>

              <div className="mb-4" dangerouslySetInnerHTML={{ __html: safeHTML }} />
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}

export default PreviewModal;
