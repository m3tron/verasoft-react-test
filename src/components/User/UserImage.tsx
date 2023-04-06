import { useAppSelector } from "../../store/hooks";
import Loader from "../shared/Loader";

const UserImage = () => {
  const user = useAppSelector(state => state.userState.user);
  const isLoading = useAppSelector(state => state.userState.isLoading);

  const image = () => {
    if (user && user.photo_url)
      return <img src={user.photo_url} alt="Profile" />;
    return <i className="fal fa-user"></i>;
  };

  const date = new Date();
  let birth;
  let age;

  if (user && user.birth_date) {
    birth = new Date(user.birth_date);
    age = date.getFullYear() - birth.getFullYear();
  }

  return (
    <div className="user-image-container">
      {isLoading ? (
        <Loader loaderSize="loader-medium loader-light" />
      ) : (
        <>
          <div className="user-image">{image()}</div>
          <p>
            {!user || !user.gender ? "" : user.gender.toUpperCase()} -{" "}
            {!user || !user.birth_date ? "" : age}
          </p>
        </>
      )}
    </div>
  );
};

export default UserImage;
