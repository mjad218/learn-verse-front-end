"use client";
const FooterForm = () => {
  const formInputStyles = "text-gray-600 w-[200px] rounded-md px-1 py-2";

  return (
    <div>
      <p className="mb-1 text-lg font-bold">Contact Us</p>
      <form className="flex flex-col items-center justify-center gap-2">
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
        <button
          type="submit"
          className="rounded-xl bg-white px-4 py-2 text-black"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default FooterForm;
