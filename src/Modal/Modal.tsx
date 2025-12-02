import { useEffect } from "react";
import { createPortal } from "react-dom";

type ModalProps = {
  isModalOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

export const Modal = ({ isModalOpen, onClose, children }: ModalProps) => {
  // Create a container for the modal (once per component instance)
  const modalContainer = document.createElement("div");

  useEffect(() => {
    if (isModalOpen) {
      document.body.appendChild(modalContainer);
    }

    return () => {
      if (document.body.contains(modalContainer)) {
        document.body.removeChild(modalContainer);
      }
    };
  }, [isModalOpen, modalContainer]);

  if (!isModalOpen) return null;

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // ✅ Close only if user clicked directly on the overlay
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return createPortal(
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={handleOverlayClick}
    >
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          ×
        </button>
        {children}
      </div>
    </div>,
    modalContainer
  );
};
