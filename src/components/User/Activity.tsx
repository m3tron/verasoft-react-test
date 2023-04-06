import Loader from "../shared/Loader";

interface ActivityProp {
  activity: number | null;
  name: string;
  isLoading: boolean;
}

const Activity = ({ activity, name, isLoading }: ActivityProp) => {
  return (
    <div className="user-activity">
      {isLoading ? (
        <Loader loaderSize="loader-medium loader-light" />
      ) : (
        <>
          <div className="user-activity-result">{activity}</div>
          <div className="user-activity-name">{name.toUpperCase()}</div>
        </>
      )}
    </div>
  );
};

export default Activity;
