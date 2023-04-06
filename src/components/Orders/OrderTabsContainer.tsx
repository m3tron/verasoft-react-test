import { useAppSelector } from "../../store/hooks";
import OrderTab from "./OrderTab";
import Loader from "../shared/Loader";

interface OrderTabsContainerProps {
  ordersKeys: string[] | null;
  selectedOrder: number;
  setViewErrors: (errors: boolean) => void;
  setSelectedOrder: (order: number) => void;
  setSortDirection: (direction: boolean) => void;
}

const OrderTabsContainer = ({
  ordersKeys,
  selectedOrder,
  setSelectedOrder,
  setViewErrors,
  setSortDirection,
}: OrderTabsContainerProps) => {
  const isLoading = useAppSelector(state => state.orderState.isLoading);

  return (
    <div className="orders-tabs-container">
      {isLoading ? (
        <Loader loaderSize="loader-small loader-light" />
      ) : ordersKeys ? (
        ordersKeys.map(orderKey => (
          <OrderTab
            key={orderKey}
            tabName={orderKey}
            selectedOrder={selectedOrder}
            setSelectedOrder={setSelectedOrder}
            index={ordersKeys.indexOf(orderKey)}
            setViewErrors={setViewErrors}
            setSortDirection={setSortDirection}
          />
        ))
      ) : null}
    </div>
  );
};

export default OrderTabsContainer;
