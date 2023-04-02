import UserImage from "./UserImage";
import UserContact from "./UserContact";
import UserActivity from "./UserActivity";
import UserStatus from "./UserStatus";

const UserInformation = () => {
  return (
    <>
      <hr />
      <div className="user-information">
        <UserImage />
        <UserContact />
        <UserActivity />
        <UserStatus />
      </div>
    </>
  );
};

export default UserInformation;
