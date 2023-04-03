import { useEffect, useState } from "react";
import OrderTable from "./OrderTable";
import OrderError from "./OrderError";

const OrderTableContainer = () => {
  const [viewErrors, setViewErrors] = useState(false);

  useEffect(() => {
    setViewErrors(false);
  }, [setViewErrors]);

  return (
    <div>
      <div className="orders-header-container">
        <div className="orders-header-buttons-container">
          <button
            onClick={() => setViewErrors(false)}
            className={`orders-header-buttons ${
              !viewErrors && "orders-header-buttons-active"
            }`}
          >
            SENT
          </button>
          <button
            onClick={() => setViewErrors(true)}
            className={`orders-header-buttons ${
              viewErrors && "orders-header-buttons-active"
            }`}
          >
            ERRORS
          </button>
        </div>
        <div className="orders-header-title">RECENT ORDERS</div>
      </div>
      {!viewErrors ? <OrderTable /> : <OrderError />}
    </div>
  );
};

export default OrderTableContainer;
