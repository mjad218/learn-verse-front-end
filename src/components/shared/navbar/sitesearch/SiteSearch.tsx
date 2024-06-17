"use client";
import { useRouter } from "next/navigation";
import { FormEvent, useRef } from "react";

const SiteSearch = () => {
  const router = useRouter();
  const searchRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchRef.current!.value) {
      router.push(`/search?q=${searchRef.current!.value}&p=1`);
      router.refresh();
    }
  };

  return (
    <form
      className="w-[550px] max-w-full"
      onSubmit={(e) => {
        handleSubmit(e);
      }}
    >
      <input
        ref={searchRef}
        className="h-8 w-full rounded-xl border border-black px-4 outline-accent3"
        placeholder={"Search for Courses.."}
      />
    </form>
  );
};

export default SiteSearch;
