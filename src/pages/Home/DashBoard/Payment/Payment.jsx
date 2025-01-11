import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import CheckoutForm from "./CheckoutForm";
import SectionTitle from "../../../../components/SectionTitle/SectionTitle";

// we have to add pulic key which we'll get from their website
const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);
const Payment = () => {
  return (
    <div>
      <SectionTitle heading={"Payment"}></SectionTitle>
      <div className="w-10/12 mx-auto bg-white h-[450px] p-24 rounded-md">
        <Elements stripe={stripePromise}>
          <CheckoutForm></CheckoutForm>
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
