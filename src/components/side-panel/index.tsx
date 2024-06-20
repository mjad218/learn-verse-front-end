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
          className="block rounded-xl bg-accent9 px-4 py-4 text-lg"
        >
          {option.name}
        </Link>
      ))}
    </div>
  );
};

export default SidePanel;
