import { onHideModal, onShowModal } from "@/redux";
import { useAppDispatch } from "@/redux/hooks";
import { IModal } from "@/types";

interface useModalProps {}

const useModal = (props?: useModalProps) => {
  const dispatch = useAppDispatch();

  const handleShowModal = (modalProps: Partial<IModal>) => {
    dispatch(onShowModal(modalProps));
  };

  const handleHideModal = () => {
    dispatch(onHideModal());
  };

  return { handleShowModal, handleHideModal };
};

export default useModal;
