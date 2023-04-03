import { format } from "date-fns";

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
  const formattedDate = format(new Date(date), "EEE, LLL d");
  const formattedTime = format(new Date(`${date} ${time}`), "h:mm b");

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
