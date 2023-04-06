interface TabProps {
  tabName: string;
  selectedOrder: number;
  index: number;
  setSelectedOrder: (index: number) => void;
  setViewErrors: (error: boolean) => void;
  setSortDirection: (direction: boolean) => void;
}

const OrderTab = ({
  tabName,
  selectedOrder,
  setSelectedOrder,
  index,
  setViewErrors,
  setSortDirection,
}: TabProps) => {
  const handleClick = () => {
    setSelectedOrder(index);
    setViewErrors(false);
    setSortDirection(false);
  };

  return (
    <div
      className={`orders-tab ${
        index === selectedOrder && "orders-tab-selected"
      }`}
      onClick={() => handleClick()}
    >
      {tabName.replace("_", " ").toUpperCase()}
    </div>
  );
};

export default OrderTab;
