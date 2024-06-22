"use client";
import { loadStripe, StripeElementsOptions } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { CheckoutForm } from "./CheckoutForm";

//leave out of rendered components
const stripePromise = loadStripe(
  "pk_test_51P82MDFYqeyQW1DbHgZSMWvlva455cETBoM6gYoS1LHGeE1LqcXbu4fQzTQFaaC9RZsDhr57terHrj8Cq1XJ4LOM00Ah5ht5DG",
);

import { Course } from "@/types/course.type";
import Image from "next/image";

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
  return (
    <div className="lg:flex lg:gap-4">
      <div className="flex flex-col items-center lg:max-w-xs">
        <span className="font-roboto text-2xl font-bold">
          {courseInfo?.courseName || "Course name"}
        </span>
        <Image
          src={`data:image/jpg;base64,${courseInfo?.image ?? ""}`}
          alt="course-image"
          width={400}
          height={400}
        />
        <span className="font-roboto text-xl font-bold">
          {courseInfo?.price || "Course price"}
        </span>
      </div>
      <Elements stripe={stripePromise} options={options}>
        <CheckoutForm courseInfo={courseInfo} />
      </Elements>
    </div>
  );
};

export default CheckoutFormContainer;
