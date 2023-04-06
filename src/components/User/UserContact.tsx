import { useAppSelector } from "../../store/hooks";
import Loader from "../shared/Loader";

const UserContact = () => {
  const user = useAppSelector(state => state.userState.user);
  const isLoading = useAppSelector(state => state.userState.isLoading);

  return (
    <div className="user-contact-container">
      {isLoading ? (
        <Loader loaderSize="loader-medium loader-light" />
      ) : (
        <>
          <div className="user-contact">
            <div className="user-contact-icon">
              <i className="fal fa-user "></i>
            </div>
            {user && user.id ? `#${user.id}` : ""}
          </div>
          <div className="user-contact">
            <div className="user-contact-icon">
              <i className="fal fa-mobile "></i>
            </div>
            {user && user.mobile_phone}
          </div>
          <div className="user-contact">
            <div className="user-contact-icon">
              <i className="fal fa-building "></i>
            </div>
            {user && user.work_phone}
          </div>
          <div className="user-contact">
            <div className="user-contact-icon">
              <i className="fal fa-home "></i>
            </div>
            {user?.home_phone}
          </div>
          <div className="user-contact" style={{ fontSize: "11px" }}>
            <div className="user-contact-icon">
              <i className="fal fa-at "></i>
            </div>
            {user && user.email}
          </div>
        </>
      )}
    </div>
  );
};

export default UserContact;
