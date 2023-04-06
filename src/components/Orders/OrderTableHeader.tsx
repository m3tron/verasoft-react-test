import { SortBy } from "./OrderTable";

interface OrderTableHeaderProps {
  sortDirection: boolean;
  setSortDirection: (direction: boolean) => void;
  colNumber: number;
  name: string;
  sortBy: SortBy;
  sortOrders:
    | {
        date: () => void;
        subjectTitle: () => void;
        communicationType: () => void;
        orderNumber: () => void;
      }
    | null
    | undefined;
}

const OrderTableHeader = ({
  colNumber,
  name,
  sortOrders,

  sortBy,
}: OrderTableHeaderProps) => {
  const handleClick = () => {
    if (sortBy === SortBy.Date) sortOrders && sortOrders.date();
    if (sortBy === SortBy.SubjectTitle) sortOrders && sortOrders.subjectTitle();
    if (sortBy === SortBy.CommunicationType)
      sortOrders && sortOrders.communicationType();
    if (sortBy === SortBy.OrderNumber) sortOrders && sortOrders.orderNumber();
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
