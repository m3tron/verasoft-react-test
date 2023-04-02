import { useEffect } from "react";
import { useAppDispatch } from "./store/hooks";
import { getUserFetch } from "./features/user/userSlice";
import { getOrderFetch } from "./features/order/orderSlice";
import "./App.scss";

import Header from "./components/Header";
import Orders from "./components/Orders";

const App = () => {
  const dispatch = useAppDispatch();

  // fetch data on first load
  // TODO: error handling
  useEffect(() => {
    dispatch(getUserFetch());
    dispatch(getOrderFetch());
  }, [dispatch]);
  console.log("render");

  return (
    <div className="app-container">
      <Header />
      <Orders />
    </div>
  );
};

export default App;
