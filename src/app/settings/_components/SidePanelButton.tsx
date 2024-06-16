import Link from "next/link";
import { Option } from "../layout";

interface Props {
  option: Option;
  slug: string | string[] | undefined;
}
const SidePanelButton = ({ option, slug }: Props) => {
  const active = "bg-accent text-white border-none";
  return (
    <div
      className={`w-[95%] rounded-2xl border border-black text-center hover:cursor-pointer ${option.key === slug ? active : ""} hover:bg-accent hover:text-white`}
    >
      <Link href={`/settings/${option.key}`} className="block py-4 text-lg">
        {option.name}
      </Link>
    </div>
  );
};

export default SidePanelButton;
