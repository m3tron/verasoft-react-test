import { useEffect, useState } from "react";
import OrderPlaceholder from "./OrderPlaceholder";

const OrderError = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  });

  return <>{loading ? <div>laoding</div> : <OrderPlaceholder />}</>;
};

export default OrderError;
