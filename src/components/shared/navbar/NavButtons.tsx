import Link from "next/link";
import { Button } from "@radix-ui/themes";
const NavButtons = () => {
  return (
    <div className="mr-[50px] w-[300px] items-center justify-center gap-[30px] md:flex">
      <Button>
        <Link href="/login">Login</Link>
      </Button>
      <Button>
        <Link href="/register">Register</Link>
      </Button>
    </div>
  );
};

export default NavButtons;
