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
      className="w-[400px] max-w-full max-md:hidden"
      onSubmit={(e) => {
        handleSubmit(e);
      }}
    >
      <div className="w-full">
        <input
          ref={searchRef}
          className="h-8 w-full rounded-xl border border-black px-4 outline-blue-500"
          placeholder={"Search for Courses.."}
        />
      </div>
      {/* <TextField.Root
        size={"3"}
        radius="full"
        placeholder="Search for Courses"
        ref={searchRef}
      >
        <TextField.Slot>
          <MagnifyingGlassIcon height="24" width="24" />
        </TextField.Slot>
      </TextField.Root> */}
    </form>
  );
};

export default SiteSearch;
