import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";

// we have to add pulic key which we'll get from their website
const stripePromise = loadStripe("");
const Payment = () => {
  return (
    <div>
      <Elements stripe={stripePromise}></Elements>
    </div>
  );
};

export default Payment;
