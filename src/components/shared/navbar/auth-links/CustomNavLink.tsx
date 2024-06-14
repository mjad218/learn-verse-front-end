import { Button } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

type VariantType =
  | "link"
  | "default"
  | "destructive"
  | "outline"
  | "secondary"
  | "ghost"
  | null
  | undefined;

export type ButtonPropsType = {
  href: string;
  name: string;
  variant: VariantType;
};

function CustomNavLink({ href, name, variant }: ButtonPropsType) {
  return (
    <Link href={href} passHref legacyBehavior>
      <Button
        variant={variant}
        className={cn(
          "transition-transform delay-150 hover:scale-95 focus:outline-none",
          "",
          {
            "bg-accent focus:bg-accent hover:bg-accent": variant === "default",
            "border-accent border-2 hover:bg-white": variant === "outline",
          },
        )}
      >
        {name}
      </Button>
    </Link>
  );
}

export default CustomNavLink;
