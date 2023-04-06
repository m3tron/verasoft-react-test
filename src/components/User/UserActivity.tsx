import { useAppSelector } from "../../store/hooks";
import Activity from "./Activity";

const UserActivity = () => {
  const user = useAppSelector(state => state.userState.user);
  const isLoading = useAppSelector(state => state.userState.isLoading);

  const activities = user && Object.entries(user.activity);

  return (
    <div>
      <div className="user-activity-title">90-DAY COMMUNICATION ACTIVITY</div>
      <div className="user-activity-container">
        {activities &&
          activities.map(activity => (
            <Activity
              key={activity[0]}
              name={activity[0]}
              activity={activity[1]}
              isLoading={isLoading}
            />
          ))}
      </div>
    </div>
  );
};

export default UserActivity;
