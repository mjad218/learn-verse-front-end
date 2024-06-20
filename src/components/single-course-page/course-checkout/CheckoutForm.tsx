"use client";
import React, { useState } from "react";
import {
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { Button } from "@/components/ui/button";
import { useAccessToken } from "@/components/current-user/context";
import { API_URL } from "@/constants/api";

export const CheckoutForm = () => {
  const { token } = useAccessToken();
  const stripe = useStripe();
  const elements = useElements();

  const [errorMessage, setErrorMessage] = useState<string | undefined>(
    undefined,
  );

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    try {
      event.preventDefault();

      if (elements == null) return;

      // Trigger form validation and wallet collection
      const { error: submitError } = await elements.submit();
      if (submitError?.message) {
        // Show error to your customer
        setErrorMessage(submitError.message);
        return;
      }

      // Create the PaymentIntent and obtain clientSecret from your server endpoint
      const res = await fetch(`${API_URL}/api/payment/secure/payment-intent`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (!res.ok) throw "Not ok Response" + res.status + res.statusText;
      const result = await res.json();
      console.log({
        result,
      });
      const { client_secret: clientSecret } = result;
      console.log(`client secret: ${clientSecret}`);

      const { error } = await stripe!.confirmPayment({
        //`Elements` instance that was used to create the Payment Element
        elements,
        clientSecret,
        confirmParams: {
          return_url: "http://127.0.0.1:3000/",
        },
      });

      if (error) {
        // This point will only be reached if there is an immediate error when
        // confirming the payment. Show error to your customer (for example, payment
        // details incomplete)
        setErrorMessage(error.message);
      } else {
        // Your customer will be redirected to your `return_url`. For some payment
        // methods like iDEAL, your customer will be redirected to an intermediate
        // site first to authorize the payment, then redirected to the `return_url`.
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="lg:min-w-3xl h-max lg:flex lg:max-w-4xl lg:flex-col lg:items-center lg:gap-4"
    >
      Current User Access token
      {token}
      <PaymentElement />
      <div className="items-center lg:flex lg:flex-col lg:gap-2">
        <Button
          type="submit"
          className="rounded-xl bg-accent font-roboto text-xl hover:bg-accent/90 focus:bg-accent/90"
          disabled={!stripe || !elements}
        >
          {"Pay"}
        </Button>
        {/* Show error message to your customers */}
        {errorMessage && (
          <span className="font-semibold text-red-600">{errorMessage}</span>
        )}
      </div>
    </form>
  );
};
