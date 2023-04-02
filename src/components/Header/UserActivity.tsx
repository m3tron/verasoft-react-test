import { useAppSelector } from "../../store/hooks";
import Activity from "./Activity";

const UserActivity = () => {
  const activities = useAppSelector(state => state.userState.user?.activity);

  return (
    <div>
      <div className="user-activity-title">90-DAY COMMUNICATION ACTIVITY</div>
      <div className="user-activity-container">
        <Activity name="sms" activity={activities?.sms} />
        <Activity name="email" activity={activities?.email} />
        <Activity name="orders" activity={activities?.orders} />
      </div>
    </div>
  );
};

export default UserActivity;
