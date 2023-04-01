import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./store/hooks";
import { getUserFetch } from "./features/user/userSlice";
import { getOrderFetch } from "./features/order/orderSlice";
import "./App.scss";

function App() {
  const user = useAppSelector(state => state.user.user);
  const orders = useAppSelector(state => state.orders.order);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getUserFetch());
    dispatch(getOrderFetch());
  }, [dispatch]);
  console.log(user, orders);

  return <div className="App"></div>;
}

export default App;
