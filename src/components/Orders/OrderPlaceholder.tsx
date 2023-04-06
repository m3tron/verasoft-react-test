import { useState, useEffect } from "react";
import Loader from "../shared/Loader";

const OrderPlaceholder = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  });
  return (
    <div className="orders-placeholder">
      {!loading ? (
        "No Items"
      ) : (
        <Loader loaderSize="loader-large loader-light" />
      )}
    </div>
  );
};

export default OrderPlaceholder;
