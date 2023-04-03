import { useAppSelector } from "../../store/hooks";

const UserContact = () => {
  const user = useAppSelector(state => state.userState.user);

  return (
    <div className="user-contact-container">
      <div className="user-contact">
        <div className="user-contact-icon">
          <i className="fal fa-user "></i>
        </div>
        #{user?.id}
      </div>
      <div className="user-contact">
        <div className="user-contact-icon">
          <i className="fal fa-mobile "></i>
        </div>
        {user?.mobile_phone}
      </div>
      <div className="user-contact">
        <div className="user-contact-icon">
          <i className="fal fa-building "></i>
        </div>
        {user?.work_phone}
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
        {user?.email}
      </div>
    </div>
  );
};

export default UserContact;
