import { useAppSelector } from "../../store/hooks";

const UserImage = () => {
  const user = useAppSelector(state => state.userState.user);

  const image = () => {
    if (user?.photo_url) return <img src={user.photo_url} alt="Profile" />;
  };

  const date = new Date();
  let birth;
  let age;

  if (user?.birth_date) {
    birth = new Date(user.birth_date);
    age = date.getFullYear() - birth?.getFullYear();
  }

  return (
    <div className="user-image">
      {image()}
      <p>
        {user?.gender.toUpperCase()} - {age}
      </p>
    </div>
  );
};

export default UserImage;
