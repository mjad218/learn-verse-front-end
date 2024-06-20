import { Button } from "@/components/ui/button";
import { settingsButtonStyle } from "@/components/side-panel/definitions";
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
