import Image from "next/image";
import SiteSearch from "./sitesearch/SiteSearch";
import Link from "next/link";
import NavButtons from "./NavButtons";
import CategoriesButton from "./CategoriesButton";
import { UserMenu } from "./user-menu";

const NavBar = () => {
  return (
    <nav
      className={`z-50 flex w-full grow items-center justify-between gap-5 border-b-[1px]
     border-b-slate-300  px-6 py-3`}
    >
      <Link href="/">
        <Image
          src="/assets/templogo.png"
          alt="website logo"
          width={200}
          height={200}
        />
      </Link>
      <CategoriesButton />
      <SiteSearch />
      <NavButtons />
      <UserMenu />
    </nav>
  );
};

export default NavBar;
