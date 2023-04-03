import { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import OrderTab from "./OrderTab";
import { setCurrentOrder } from "../../features/order/orderSlice";

const OrderTabsContainer = () => {
  const [selectedTab, setSelectedTab] = useState("orders_AAA");
  const orders = useAppSelector(state => state.orderState.orders);
  const isLoading = useAppSelector(state => state.orderState.isLoading);

  let tabNames;

  if (orders) {
    tabNames = Object.keys(orders);
  }

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (orders) {
      // @ts-ignore
      dispatch(setCurrentOrder(orders[selectedTab]));
    }
  }, [dispatch, orders, selectedTab]);

  return (
    <div className="orders-tabs-container">
      {isLoading ? (
        <div>loading</div>
      ) : (
        tabNames?.map(tabName => (
          <OrderTab
            key={tabName}
            tabName={tabName}
            selectedTab={selectedTab}
            setSelectedTab={setSelectedTab}
          />
        ))
      )}
    </div>
  );
};

export default OrderTabsContainer;
