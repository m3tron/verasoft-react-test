import { useState } from "react";
import { useAppSelector } from "../../store/hooks";
import { createPortal } from "react-dom";
import Modal from "../Modal";
import Loader from "../shared/Loader";

const NameBar = () => {
  const [showModal, setShowModal] = useState(false);

  const firstName = useAppSelector(state => state.userState.user?.first_name);
  const lastName = useAppSelector(state => state.userState.user?.last_name);
  const isLoading = useAppSelector(state => state.userState.isLoading);

  const formNameString = () => {
    if (!firstName && !lastName) return "";
    if (!firstName && lastName) return lastName;
    if (firstName && !lastName) return firstName;
    return `${firstName} ${lastName}`;
  };

  return (
    <div className="namebar">
      <div className="name">
        <div className="name-icon">
          <i className="fal fa-star fa-lg"></i>
        </div>

        <div className="name-text">
          {isLoading ? (
            <Loader loaderSize="loader-small loader-light" />
          ) : (
            formNameString()
          )}
        </div>
      </div>

      <div>
        <button className="namebar-button" onClick={() => setShowModal(true)}>
          New Button
        </button>
        {showModal &&
          createPortal(<Modal setShowModal={setShowModal} />, document.body)}
      </div>
    </div>
  );
};

export default NameBar;
