"use client";
import DropdownAvatar from "@/components/shared/navbar/auth-links/DropDownAvatar";
import SidePanelButton from "./SidePanelButton";
import { useParams } from "next/navigation";
import { Option } from "../layout";
import Link from "next/link";

interface Props {
  options: Option[];
}

const SidePanel = ({ options }: Props) => {
  const { slug } = useParams();

  return (
    <div
      className="w-full gap-y-6 place-self-start"
      style={{ gridColumn: "1/3" }}
    >
      <div className="flex flex-col items-center justify-center gap-4 rounded-xl bg-gray-50/10 pb-4 shadow-md shadow-blue-100">
        <div className="grid-col-5 grid pt-4">
          <div className="justify-self-center" style={{ gridColumn: "1/2" }}>
            <DropdownAvatar />
          </div>
          <div
            className="grid grid-rows-2 justify-self-center"
            style={{ gridColumn: "2/6" }}
          >
            <span className="justify-self-center" style={{ gridRow: "1/2" }}>
              {"<Username>"}
            </span>
            <div
              className="group justify-self-center transition duration-300"
              style={{ gridRow: "2/3" }}
            >
              <Link href="/profile">View your profile</Link>
              <span className="block h-0.5 max-w-0 bg-black transition-all duration-300 group-hover:max-w-full"></span>
            </div>
          </div>
        </div>
        {options.map((option) => (
          <SidePanelButton option={option} key={option.key} slug={slug} />
        ))}
      </div>
    </div>
  );
};

export default SidePanel;
