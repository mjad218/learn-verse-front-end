"use client";
import { loadStripe, StripeElementsOptions } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { CheckoutForm } from "./CheckoutForm";

const stripePromise = loadStripe("pk_test_6pRNASCoBOKtIshFeQd4XMUh");
const options: StripeElementsOptions = {
  mode: "payment",
  amount: 1099,
  currency: "usd",
  // Fully customizable with appearance API.
  appearance: {
    /*...*/
  },
};

import { Course } from "@/types/course.type";

const CheckoutFormContainer = ({
  courseInfo,
}: {
  courseInfo: Course | null;
}) => {
  //fetch course info & display it
  return (
    <div className="lg:flex lg:gap-4">
      <div className="flex flex-col">
        <span>{courseInfo?.courseName || "Course name"}</span>
        <span>{courseInfo?.image || "Course image"}</span>
        <span>{courseInfo?.price || "Course price"}</span>
      </div>
      <Elements stripe={stripePromise} options={options}>
        <CheckoutForm />
      </Elements>
    </div>
  );
};

export default CheckoutFormContainer;
