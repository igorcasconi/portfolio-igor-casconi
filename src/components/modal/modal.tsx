import { PropsWithChildren, useRef, useState } from "react";

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

  if (!isOpen) return null;

  return (
    <div className="h-full w-full bg-[rgb(0,0,0,0.6)] z-[900] fixed top-0 left-0 flex justify-center items-center">
      <div
        ref={refContentModal}
        className={`margin-auto bg-gray-200 h-[300px] w-[300px] rounded-lg ${style} relative animate__animated animate__fadeInUp sm:mx-2`}
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
