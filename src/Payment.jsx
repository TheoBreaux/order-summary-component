import React from "react";
import "./Payment.css";

const Payment = () => {
  return <div className="payment-section">
    <button>Proceed to Payment</button>
    <a className="cancel" href="">Cancel Order</a>
  </div>;
};

export default Payment;
