import { Order } from "../../features/order/orderSlice";
import { useAppSelector } from "../../store/hooks";
import OrderPlaceholder from "./OrderPlaceholder";
import OrderTableRow from "./OrderTableRow";

const OrderTable = () => {
  const currentOrder = useAppSelector(
    state => state.orderState.currentOrder?.sent
  );

  return (
    <>
      {currentOrder ? (
        <table>
          <thead>
            <tr className="orders-table-headers-container">
              <th className="orders-table-header orders-table-col1">
                DATE & TIME
              </th>
              <th className="orders-table-header orders-table-col2">SUBJECT</th>
              <th className="orders-table-header orders-table-col3">
                COMMUNICATION TYPE
              </th>
              <th className="orders-table-header orders-table-col4">ORDER #</th>
              <th className="orders-table-header orders-table-col5"></th>
            </tr>
          </thead>
          <tbody>
            {currentOrder &&
              currentOrder.map((order: Order | any) => (
                <OrderTableRow
                  key={order.id}
                  date={order.sent_dt}
                  time={order.sent_tm}
                  subject={order.subject}
                  type={order.type}
                  orderId={order.order_id}
                />
              ))}
          </tbody>
        </table>
      ) : (
        <OrderPlaceholder />
      )}
    </>
  );
};

export default OrderTable;
