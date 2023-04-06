import "./Orders.scss";
import { useEffect, useState } from "react";
import OrderTable from "./OrderTable";
import OrderError from "./OrderError";
import OrderTableTitle from "./OrderTableTitle";
import OrderTabsContainer from "./OrderTabsContainer";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { Order, Sent, setCurrentOrder } from "../../features/order/orderSlice";

const Orders = () => {
  const [viewErrors, setViewErrors] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(2);
  const [sortDirection, setSortDirection] = useState(false);

  const orderState = useAppSelector(state => state.orderState.orders);
  // const isLoading = useAppSelector(state => state.orderState.isLoading);

  const ordersKeys = orderState && Object.keys(orderState);
  const orderValues: Order[] | null =
    orderState && Object.values(Object.values(orderState));

  const sentOrders = orderValues && orderValues[selectedOrder].sent;
  const [orders, setOrders] = useState(sentOrders && [...sentOrders]);

  // read-only to read&write
  const sortedOrders = orders && [...orders];

  const sortById = () => {
    sortedOrders &&
      sortedOrders.sort((order1, order2) =>
        !sortDirection ? order2.id - order1.id : order1.id - order2.id
      );
    setOrders(sortedOrders);
  };

  const sortBySubjectTitle = () => {
    sortedOrders &&
      sortedOrders.sort((order1, order2) => {
        const title1 = order1.subject.title.toUpperCase();
        const title2 = order2.subject.title.toUpperCase();

        if (!sortDirection && title2 < title1) return -1;
        if (!sortDirection && title2 > title1) return 1;
        if (sortDirection && title2 > title1) return -1;
        if (sortDirection && title2 < title1) return 1;

        return 0;
      });
    setOrders(sortedOrders);
  };

  const sortByCommunicationType = () => {
    sortedOrders &&
      sortedOrders.sort((order1, order2) => {
        const title1 = order1.type.toUpperCase();
        const title2 = order2.type.toUpperCase();

        if (!sortDirection && title2 < title1) return -1;
        if (!sortDirection && title2 > title1) return 1;
        if (sortDirection && title2 > title1) return -1;
        if (sortDirection && title2 < title1) return 1;

        return 0;
      });
    setOrders(sortedOrders);
  };

  const sortByOrderNumber = () => {
    sortedOrders &&
      sortedOrders.sort((order1, order2) =>
        !sortDirection
          ? order2.order_id - order1.order_id
          : order1.order_id - order2.order_id
      );
    setOrders(sortedOrders);
  };

  const sortOrders = sentOrders && {
    orderId: sortById,
    subjectTitle: sortBySubjectTitle,
    communicationType: sortByCommunicationType,
    orderNumber: sortByOrderNumber,
  };

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setCurrentOrder(selectedOrder));
  }, [dispatch, selectedOrder]);

  useEffect(() => {
    setOrders(sentOrders);
  }, [sentOrders]);

  useEffect(() => {
    setViewErrors(false);
  }, [setViewErrors]);

  const handleClick = () => {
    setSortDirection(!sortDirection);
    sortOrders?.subjectTitle();
  };

  return (
    <>
      <OrderTabsContainer
        ordersKeys={ordersKeys}
        selectedOrder={selectedOrder}
        setSelectedOrder={setSelectedOrder}
        setViewErrors={setViewErrors}
        setSortDirection={setSortDirection}
      />
      <OrderTableTitle viewErrors={viewErrors} setViewErrors={setViewErrors} />

      {!viewErrors ? (
        <OrderTable
          orders={orders}
          sortDirection={sortDirection}
          setSortDirection={setSortDirection}
          sortOrders={sortOrders}
        />
      ) : (
        <OrderError />
      )}
      <button onClick={handleClick}>click</button>
    </>
  );
};

export default Orders;
