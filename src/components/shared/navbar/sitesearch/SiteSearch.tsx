"use client";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { TextField } from "@radix-ui/themes";
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
      className="w-[50dvw] max-md:hidden"
      onSubmit={(e) => {
        handleSubmit(e);
      }}
    >
      <TextField.Root size={"3"} radius="full">
        <TextField.Slot>
          <MagnifyingGlassIcon height="24" width="24" />
        </TextField.Slot>
        <TextField.Input
          placeholder="Search for Courses"
          size={"3"}
          ref={searchRef}
        />
      </TextField.Root>
    </form>
  );
};

export default SiteSearch;
