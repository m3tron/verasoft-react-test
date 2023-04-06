import "./Orders.scss";
import { useEffect, useState } from "react";
import OrderTable from "./OrderTable";
import OrderError from "./OrderError";
import OrderTableTitle from "./OrderTableTitle";
import OrderTabsContainer from "./OrderTabsContainer";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { Order, setCurrentOrder } from "../../features/order/orderSlice";

const Orders = () => {
  const [viewErrors, setViewErrors] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(2);
  const [sortDirection, setSortDirection] = useState(false); //acsending = true, descending = false

  const orderState = useAppSelector(state => state.orderState.orders);
  const isLoading = useAppSelector(state => state.orderState.isLoading);

  const ordersKeys = orderState && Object.keys(orderState);
  const orderValues: Order[] | null =
    orderState && Object.values(Object.values(orderState));

  const sentOrders = orderValues && orderValues[selectedOrder].sent;
  const [orders, setOrders] = useState(sentOrders && [...sentOrders]);

  // read-only to read&write
  const sortedOrders = orders && [...orders];

  const sortByDate = () => {
    if (sortedOrders) {
      sortedOrders.sort((order1, order2) => {
        const date1 = new Date(`${order1.sent_dt} ${order1.sent_tm}`).getTime();
        const date2 = new Date(`${order2.sent_dt} ${order2.sent_tm}`).getTime();

        return date1 - date2;
      });

      setOrders(!sortDirection ? sortedOrders.reverse() : sortedOrders);
      setSortDirection(!sortDirection);
    }
  };

  const sortBySubjectTitle = () => {
    if (sortedOrders) {
      sortedOrders.sort((order1, order2) => {
        let title1 = order1.subject.title.toUpperCase();
        let title2 = order2.subject.title.toUpperCase();

        return title1 < title2 ? -1 : title1 > title2 ? 1 : 0;
      });

      setOrders(!sortDirection ? sortedOrders.reverse() : sortedOrders);
      setSortDirection(!sortDirection);
    }
  };

  const sortByCommunicationType = () => {
    if (sortedOrders) {
      sortedOrders.sort((order1, order2) => {
        const type1 = order1.type.toUpperCase();
        const type2 = order2.type.toUpperCase();

        return type1 < type2 ? -1 : type1 > type2 ? 1 : 0;
      });

      setOrders(!sortDirection ? sortedOrders.reverse() : sortedOrders);
      setSortDirection(!sortDirection);
    }
  };

  const sortByOrderNumber = () => {
    if (sortedOrders) {
      sortedOrders.sort((order1, order2) => {
        const orderId1 = order1.order_id;
        const orderId2 = order2.order_id;

        return orderId1 - orderId2;
      });

      setOrders(!sortDirection ? sortedOrders.reverse() : sortedOrders);
      setSortDirection(!sortDirection);
    }
  };

  const sortOrders = sentOrders && {
    date: sortByDate,
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

      {viewErrors || isLoading ? (
        <OrderError />
      ) : (
        <OrderTable
          orders={orders}
          sortDirection={sortDirection}
          setSortDirection={setSortDirection}
          sortOrders={sortOrders}
        />
      )}
    </>
  );
};

export default Orders;
