interface TabProps {
  tabName: string;
  selectedTab: string;
  setSelectedTab: (tabName: string) => void;
}

const OrderTab = ({ tabName, selectedTab, setSelectedTab }: TabProps) => {
  return (
    <div
      className={`orders-tab ${
        tabName === selectedTab && "orders-tab-selected"
      }`}
      onClick={() => setSelectedTab(tabName)}
    >
      {tabName.replace("_", " ").toUpperCase()}
    </div>
  );
};

export default OrderTab;
