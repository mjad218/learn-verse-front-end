import Link from "next/link";
import { Button } from "@radix-ui/themes";

interface Props {
  href: string;
  name: string;
}

function CustomNavLink({ href, name }: Props) {
  return (
    <Link href={href} passHref legacyBehavior>
      <Button>{name}</Button>
    </Link>
  );
}

export default CustomNavLink;
