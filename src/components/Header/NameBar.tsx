import { useAppSelector } from "../../store/hooks";

const NameBar = () => {
  const firstName = useAppSelector(state => state.userState.user?.first_name);
  const lastName = useAppSelector(state => state.userState.user?.last_name);

  return (
    <div className="namebar">
      <div className="name">
        <div>star</div>
        <div>{`${firstName} ${lastName}`}</div>
      </div>
      <div>
        <button>New Button</button>
      </div>
    </div>
  );
};

export default NameBar;
