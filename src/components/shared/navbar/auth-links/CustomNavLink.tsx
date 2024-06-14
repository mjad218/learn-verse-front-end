import { Button } from "@/components/ui/button";
import Link from "next/link";

export interface ButtonPropsType {
  href: string;
  name: string;
  variant:
    | "link"
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | null
    | undefined;
}

function CustomNavLink({ href, name, variant }: ButtonPropsType) {
  return (
    <Link href={href} passHref legacyBehavior>
      <Button variant={variant}>{name}</Button>
    </Link>
  );
}

export default CustomNavLink;
