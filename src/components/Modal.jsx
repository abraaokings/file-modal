import { ModalContainer, ModalOverlay } from "../styles/Modal.styles";
import Search from "./Search";
import QuickAccess from "./QuickAccess";
import ModalContent from "./ModalContent";
import IconCloseModal from "../assets/images/IconCloseModal";

const Modal = ({ modal, setModal }) => {
  if (modal) {
    return (
      <>
        <ModalOverlay onClick={()=> setModal(false)} />
        <ModalContainer>
          <IconCloseModal onClick={() => setModal(false)} />
          <Search />
          <QuickAccess />
          <ModalContent />
        </ModalContainer>
      </>
    );
  }
};

export default Modal;
