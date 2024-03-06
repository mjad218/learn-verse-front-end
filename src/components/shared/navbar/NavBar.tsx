import Image from "next/image";
import SiteSearch from "./sitesearch/SiteSearch";
import Link from "next/link";
import NavButtons from "./auth-links/NavButtons";
import CategoriesButton from "./CategoriesButton";

const NavBar = () => {
  return (
    <nav
      className={`z-50  flex w-full  justify-center border-b-[1px]
     border-b-slate-400/80  bg-slate-100 px-6 py-3`}
    >
      <div className="flex max-w-6xl items-center justify-around gap-5 2xl:max-w-[96rem] 2xl:gap-8">
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
      </div>
    </nav>
  );
};

export default NavBar;
