import { getOrderFetch } from "../../features/order/orderSlice";
import { useAppDispatch } from "../../store/hooks";

interface OrderTableTitleProps {
  viewErrors: boolean;
  setViewErrors: (viewErrors: boolean) => void;
}

const OrderTableTitle = ({
  viewErrors,
  setViewErrors,
}: OrderTableTitleProps) => {
  const dispatch = useAppDispatch();

  const handleClick = (errorsToggle: boolean) => {
    dispatch(getOrderFetch());
    setViewErrors(errorsToggle);
  };

  return (
    <div className="orders-header-container">
      <div className="orders-header-buttons-container">
        <button
          onClick={() => handleClick(false)}
          className={`orders-header-buttons ${
            !viewErrors && "orders-header-buttons-active"
          }`}
        >
          SENT
        </button>
        <button
          onClick={() => handleClick(true)}
          className={`orders-header-buttons ${
            viewErrors && "orders-header-buttons-active"
          }`}
        >
          ERRORS
        </button>
      </div>
      <div className="orders-header-title">RECENT ORDERS</div>
    </div>
  );
};

export default OrderTableTitle;
