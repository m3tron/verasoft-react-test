import { format } from "date-fns";
import { useAppSelector } from "../../store/hooks";
import Loader from "../shared/Loader";

const UserStatus = () => {
  const user = useAppSelector(state => state.userState.user);
  const isLoading = useAppSelector(state => state.userState.isLoading);

  let date;

  if (user && user.carrier_status.since) {
    date = format(new Date(user.carrier_status.since), "LLL d, y");
  }

  return (
    <div className="user-status">
      {isLoading ? (
        <Loader loaderSize="loader-medium loader-light" />
      ) : (
        <>
          <div className="user-status-title">SMS CARRIER STATUS</div>
          <div className="user-activity-result">
            {user && user.carrier_status.status}
          </div>
          <div className="user-activity-name">{`SINCE ${date?.toUpperCase()}`}</div>
        </>
      )}
    </div>
  );
};

export default UserStatus;
