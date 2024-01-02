import { PropsWithChildren, useEffect, useRef } from "react";

import useOnClickOutside from "@/hooks/useOnClickOutside";
import { XMarkIcon } from "@heroicons/react/16/solid";

type ModalProps = PropsWithChildren & {
  isOpen: boolean;
  onOpen?: () => void;
  onClose?: () => void;
  style?: string;
};

const Modal = ({ onOpen, onClose, isOpen, children, style }: ModalProps) => {
  const refContentModal = useRef<HTMLDivElement>(null);

  useOnClickOutside(refContentModal, onClose);

  useEffect(() => {
    const body = document.getElementsByTagName("body")[0];

    if (!isOpen) {
      body.classList.remove("overflow-hidden");
      return;
    }

    body.classList.add("overflow-hidden");
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="h-full w-full bg-[rgb(0,0,0,0.6)] z-[900] fixed top-0 left-0 overflow-auto sm:px-4 pb-4">
      <div
        ref={refContentModal}
        className={`bg-gray-200 h-auto min-h-[300px] w-[300px] max-md:w-full rounded-lg relative animate__animated animate__fadeInUp mt-8 mr-auto ml-auto mb-auto ${style}`}
      >
        <button
          className="absolute top-3 right-4 h-[20px] w-[20px]"
          onClick={onClose}
        >
          <XMarkIcon width={20} height={20} color="black" />
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
