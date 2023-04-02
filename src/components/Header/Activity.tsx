interface ActivityProp {
  activity: number | undefined;
  name: string;
}

const Activity = ({ activity, name }: ActivityProp) => {
  return (
    <div className="user-activity">
      <div className="user-activity-result">{activity}</div>
      <div className="user-activity-name">{name.toUpperCase()}</div>
    </div>
  );
};

export default Activity;
