import { useEffect } from "react";
import { useAppDispatch } from "./store/hooks";
import { getUserFetch } from "./features/user/userSlice";
import { getOrderFetch } from "./features/order/orderSlice";
import "./App.scss";

import User from "./components/User";
import Orders from "./components/Orders";

const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getUserFetch());
    dispatch(getOrderFetch());
  }, [dispatch]);

  return (
    <div className="app-container">
      <User />
      <Orders />
    </div>
  );
};

export default App;
