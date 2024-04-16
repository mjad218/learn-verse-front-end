import { Box } from "@radix-ui/themes";
import Link from "next/link";
interface Option {
  key: string;
  name: string;
}
interface Props {
  option: Option;
  selected: string | string[] | undefined;
}
const SidePanelButton = ({ option, selected }: Props) => {
  const active = "bg-[#3e63dd] text-white";
  return (
    <Box
      className={`w-[95%] rounded-2xl text-center hover:cursor-pointer
    ${option.key === selected ? active : ""}
     hover:bg-[#3e63dd] hover:text-white`}
    >
      <Link href={`/settings/${option.key}`} className="block py-4">
        {option.name}
      </Link>
    </Box>
  );
};

export default SidePanelButton;
