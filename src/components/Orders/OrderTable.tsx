import { Sent } from "../../features/order/orderSlice";
import OrderPlaceholder from "./OrderPlaceholder";
import OrderTableRow from "./OrderTableRow";
import OrderTableHeader from "./OrderTableHeader";

interface OrderTableProps {
  orders: Sent[] | null | undefined;
  sortDirection: boolean;
  setSortDirection: (direction: boolean) => void;
  sortOrders:
    | {
        orderId: () => void;
        subjectTitle: () => void;
        communicationType: () => void;
        orderNumber: () => void;
      }
    | null
    | undefined;
}

export enum SortBy {
  ID = 1,
  SubjectTitle,
  CommunicationType,
  OrderNumber,
}

const OrderTable = ({
  orders,
  sortDirection,
  setSortDirection,
  sortOrders,
}: OrderTableProps) => {
  const tableHeaderList = [
    { name: "date & time", colNumber: 1, sortBy: SortBy.ID },
    { name: "subject", colNumber: 2, sortBy: SortBy.SubjectTitle },
    {
      name: "communication type",
      colNumber: 3,
      sortBy: SortBy.CommunicationType,
    },
    { name: "order #", colNumber: 4, sortBy: SortBy.OrderNumber },
  ];

  return (
    <>
      {orders ? (
        <table>
          <thead>
            <tr className="orders-table-headers-container">
              {tableHeaderList.map(header => (
                <OrderTableHeader
                  key={header.name}
                  name={header.name}
                  colNumber={header.colNumber}
                  sortBy={header.sortBy}
                  sortDirection={sortDirection}
                  setSortDirection={setSortDirection}
                  sortOrders={sortOrders}
                />
              ))}
              <th className="orders-table-header orders-table-col5"></th>
            </tr>
          </thead>
          <tbody>
            {orders &&
              orders.map(order => (
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
