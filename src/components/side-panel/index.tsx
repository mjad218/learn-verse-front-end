"use client";
import Link from "next/link";

interface Props {
  options: Option[];
}
export interface Option {
  key: string;
  name: string;
  slug: string;
}
const SidePanel = ({ options }: Props) => {
  return (
    <div className="flex flex-col gap-3">
      {options.map((option) => (
        <Link
          href={option.slug}
          key={option.key}
          className="block rounded-xl border-2 border-accent bg-white px-1 py-2 text-center font-roboto text-lg text-black transition-transform delay-75 ease-in-out hover:scale-90 active:scale-90"
        >
          {option.name}
        </Link>
      ))}
    </div>
  );
};

export default SidePanel;
