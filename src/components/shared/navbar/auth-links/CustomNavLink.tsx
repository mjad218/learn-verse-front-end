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
          "font-bold transition-transform delay-75 hover:scale-110 focus:outline-none",
          "",
          {
            "bg-accent hover:bg-accent focus:bg-accent": variant === "default",
            "border-2 border-accent hover:bg-white": variant === "outline",
          },
        )}
      >
        {name}
      </Button>
    </Link>
  );
}

export default CustomNavLink;
