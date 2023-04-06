import { useAppSelector } from "../../store/hooks";
import Loader from "../shared/Loader";

const UserStatus = () => {
  const user = useAppSelector(state => state.userState.user);
  const isLoading = useAppSelector(state => state.userState.isLoading);

  const dateString =
    user && user.carrier_status.since && user.carrier_status.since;

  const date =
    dateString &&
    new Date(dateString).toLocaleString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });

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
          <div className="user-activity-name">
            {date && `SINCE ${date?.toUpperCase()}`}
          </div>
        </>
      )}
    </div>
  );
};

export default UserStatus;
