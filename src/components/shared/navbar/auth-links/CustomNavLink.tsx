import Link from "next/link";
import { Button } from "@radix-ui/themes";

interface Props {
  href: string;
  name: string;
  variant: string;
}

function CustomNavLink({ href, name, variant }: Props) {
  return (
    <Link href={href} passHref legacyBehavior>
      {/* @ts-ignore */}
      <Button variant={variant}>{name}</Button>
    </Link>
  );
}

export default CustomNavLink;
