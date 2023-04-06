import Loader from "../shared/Loader";
import "./Modal.scss";

interface ModalProps {
  setShowModal: (show: boolean) => void;
}

const Modal = ({ setShowModal }: ModalProps) => {
  return (
    <div className="modal-container">
      <div className="modal-content-container">
        <div
          className="modal-close-container"
          onClick={() => setShowModal(false)}
        >
          <i className="fal fa-times"></i>
        </div>
        <div className="modal-content">
          <Loader loaderSize="loader-xlarge loader-light" />
        </div>
      </div>
    </div>
  );
};

export default Modal;
