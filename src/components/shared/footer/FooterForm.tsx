"use client";

import { Button } from "@/components/ui/button";

const FooterForm = () => {
  const formInputStyles = "text-gray-600 2xl:w-96 w-72 rounded-md px-1 py-2";

  return (
    <div>
      <p className="mb-1 text-lg font-bold">Contact Us</p>
      <form
        className="flex flex-col items-center justify-center gap-2"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          className={`${formInputStyles}`}
          placeholder="Name"
        />
        <input
          type="text"
          className={`${formInputStyles}`}
          placeholder="Email"
        />
        <input
          type="text"
          className={`${formInputStyles}`}
          placeholder="Message"
        />
        <Button
          type="submit"
          className="rounded-xl bg-white px-4 py-1 text-xl text-black transition-transform delay-75 hover:bg-white active:scale-95 active:bg-white"
        >
          Send
        </Button>
      </form>
    </div>
  );
};

export default FooterForm;
