import { useAppSelector } from "../../store/hooks";

const UserContact = () => {
  const user = useAppSelector(state => state.userState.user);

  return (
    <div className="user-contact">
      <div>#{user?.id}</div>
      <div>{user?.home_phone}</div>
      <div>{user?.mobile_phone}</div>
      <div>{user?.work_phone}</div>
      <div>{user?.email}</div>
    </div>
  );
};

export default UserContact;
