import SiteSearch from "./sitesearch/SiteSearch";
import Link from "next/link";
import NavButtons from "./auth-links/NavButtons";
import CategoriesButton from "./CategoriesButton";
import { AppLogo } from "@/components/app-logo";
import { Row } from "../row";

const NavBar = () => {
  return (
    <div className="bg-gray-50/50 shadow-md">
      <Row>
        <nav
          className={`z-50 flex w-full justify-between border-b-[1px] border-b-slate-200 px-6 py-3`}
        >
          <div className="flex items-center justify-around gap-8">
            <Link href="/">
              <AppLogo className="h-auto w-40 text-accent" />
            </Link>
            <CategoriesButton />
          </div>
          <SiteSearch />
          <NavButtons />
        </nav>
      </Row>
    </div>
  );
};

export default NavBar;
