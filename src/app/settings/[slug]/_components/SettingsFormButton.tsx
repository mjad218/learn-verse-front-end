import { Button } from "@/components/ui/button";
import { settingsButtonStyle } from "./definitions";
import { cn } from "@/lib/utils";

type IProps = {
  children: React.ReactNode;
  className: string;
  type?: "button" | "submit" | "reset" | undefined;
  disabled?: boolean;
};

const SettingsFormButton: React.FC<IProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <Button className={cn(`${settingsButtonStyle}`, className)} {...props}>
      {children}
    </Button>
  );
};

export default SettingsFormButton;

//self-center text-black disabled:border-gray-500
