interface RowProps {
  date: string;
  time: string;
  subject: {
    title: string;
    email: string;
  };
  type: string;
  orderId: number;
}

const OrderTableRow = ({ date, time, subject, type, orderId }: RowProps) => {
  const dateString: string = `${date} ${time}`;

  const formattedDate = new Date(dateString).toLocaleString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
  });

  const formattedTime = new Date(dateString).toLocaleString("en-US", {
    hour: "numeric",
    minute: "2-digit",
  });

  return (
    <tr className="orders-table-row">
      <td className="orders-table-col1">
        <div className="orders-table-row-emphasis">{formattedDate}</div>
        {formattedTime}
      </td>
      <td className="orders-table-col2">
        <div className="orders-table-row-emphasis">{subject.title}</div>
        {subject.email}
      </td>
      <td className="orders-table-col3">{type}</td>
      <td className="orders-table-col4">{orderId}</td>
      <td className="orders-table-col5">
        <button className="orders-table-row-button">RESEND</button>
      </td>
    </tr>
  );
};

export default OrderTableRow;
