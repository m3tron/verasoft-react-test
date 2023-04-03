import { useState } from "react";
import "./Orders.scss";
import OrderTableContainer from "./OrderTableContainer";
import OrderTabsContainer from "./OrderTabsContainer";

const Orders = () => {
  return (
    <>
      <OrderTabsContainer />
      <OrderTableContainer />
    </>
  );
};

export default Orders;
