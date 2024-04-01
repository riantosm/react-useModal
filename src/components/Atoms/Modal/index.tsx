import { CloseSvg } from "@/assets/svg";
import { onHideModal } from "@/redux";
import { useModal, useMySelector } from "@/sideEffect";
import { clsx } from "clsx";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

interface ModalProps {}

const Modal = (props: ModalProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const { global } = useMySelector();
  const { handleHideModal } = useModal();

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(!!global.modal?.isShow);
    }, 10);
  }, [global.modal?.isShow]);

  const className = {
    wrapper: clsx(
      {
        block: global.modal.isShow,
        hidden: !global.modal.isShow,
      },
      "bg-[rgb(0,0,0,.6)] h-full fixed w-full z-[10000] grid items-center sm:justify-center p-4"
    ),
    content: clsx(
      {
        "-mt-[50px]": isLoading,
        "-mt-[100px]": !isLoading,
      },
      "bg-white rounded-xm shadow-2xl relative container self-center transition-all rounded-xl overflow-hidden p-5"
    ),
  };

  return (
    <div className={className.wrapper}>
      <div className="h-screen w-screen absolute" onClick={handleHideModal} />
      <div className={className.content}>
        <div className="max-h-[600px] min-h-[50px] sm:w-[600px] overflow-y-scroll- py-4- px-6-">
          {global.modal.content || "Modal"}
        </div>
        <button className="absolute top-4 right-4" onClick={handleHideModal}>
          <CloseSvg className="fill-slate-500 w-3 h-3" />
        </button>
      </div>
    </div>
  );
};

export default Modal;
