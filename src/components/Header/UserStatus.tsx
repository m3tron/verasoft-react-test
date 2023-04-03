import { format } from "date-fns";
import { useAppSelector } from "../../store/hooks";

const UserStatus = () => {
  const carrierStatus = useAppSelector(
    state => state.userState.user?.carrier_status
  );

  let date;

  if (carrierStatus?.since) {
    date = format(new Date(carrierStatus.since), "LLL d, y");
  }

  return (
    <div className="user-status">
      <div className="user-status-title">SMS CARRIER STATUS</div>
      <div className="user-activity-result">{carrierStatus?.status}</div>
      <div className="user-activity-name">{`SINCE ${date?.toUpperCase()}`}</div>
    </div>
  );
};

export default UserStatus;
