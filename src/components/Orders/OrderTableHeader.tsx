import { SortBy } from "./OrderTable";

interface OrderTableHeaderProps {
  sortDirection: boolean;
  setSortDirection: (direction: boolean) => void;
  // sortedOrders: (a: string, b: boolean /* , c: string */) => void;
  colNumber: number;
  name: string;
  sortBy: SortBy;
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

const OrderTableHeader = ({
  sortDirection,
  setSortDirection,
  // sortedOrders,
  colNumber,
  name,
  sortBy,
  sortOrders,
}: OrderTableHeaderProps) => {
  const handleClick = () => {
    if (SortBy.ID) sortOrders?.orderId();
    if (SortBy.SubjectTitle) sortOrders?.subjectTitle();
    if (SortBy.CommunicationType) sortOrders?.communicationType();
    if (SortBy.OrderNumber) sortOrders?.orderNumber();

    setSortDirection(!sortDirection);
  };

  return (
    <th
      className={`orders-table-header orders-table-col${colNumber.toString()}`}
      onClick={() => handleClick()}
    >
      {name.toUpperCase()}
    </th>
  );
};

export default OrderTableHeader;
