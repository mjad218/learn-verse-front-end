"use client";
import { loadStripe, StripeElementsOptions } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { CheckoutForm } from "./CheckoutForm";

//leave out of rendered components
const stripePromise = loadStripe(
  "pk_test_51P82MDFYqeyQW1DbHgZSMWvlva455cETBoM6gYoS1LHGeE1LqcXbu4fQzTQFaaC9RZsDhr57terHrj8Cq1XJ4LOM00Ah5ht5DG",
);

import { Course } from "@/types/course.type";

const CheckoutFormContainer = ({
  courseInfo,
}: {
  courseInfo: Course | null;
}) => {
  const options: StripeElementsOptions = {
    mode: "payment",
    amount: 1099,
    currency: "usd",
  };
  //fetch course info & display it
  return (
    <div className="lg:flex lg:gap-4">
      {/* temporary section */}
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
