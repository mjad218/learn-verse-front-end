import { IconType } from "react-icons";

interface Props {
  Icon: IconType;
}

const FooterIcon = ({ Icon }: Props) => {
  return <Icon color="white" size="20" className="cursor-pointer" />;
};

export default FooterIcon;
