"use client";
import SiteSearch from "./sitesearch/SiteSearch";
import NavButtons from "./auth-links/NavButtons";
import CategoriesButton from "./CategoriesButton";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseSharp } from "react-icons/io5";
import { cn } from "@/lib/utils";
import Dropdown from "./auth-links/Dropdown";
import { useCurrentUser } from "@/components/current-user/context";
import NavUser from "./auth-links/NavUser";

const NavBar = () => {
  const { user } = useCurrentUser();
  const [isMobile, setIsMobile] = useState(false);
  return (
    <div className="flex items-center gap-5">
      <div>
        <Button
          className="flex bg-transparent hover:bg-transparent lg:hidden"
          title="Toggle Menu"
          onClick={() => setIsMobile((prev) => !prev)}
        >
          {!isMobile && (
            <RxHamburgerMenu className="block h-auto w-10 text-accent" />
          )}
          {isMobile && (
            <IoCloseSharp className="block h-auto w-10 text-accent" />
          )}
        </Button>
      </div>
      <div
        className={cn(
          "hidden flex-row items-center gap-5 lg:flex",
          isMobile
            ? "fixed right-0 top-0 flex h-screen w-[70vw] flex-col items-start bg-accent9 px-7 pt-24"
            : "",
        )}
      >
        {isMobile && (
          <Button
            className="absolute left-5 top-5 flex bg-transparent hover:bg-transparent lg:hidden"
            title="Toggle Menu"
            onClick={() => setIsMobile((prev) => !prev)}
          >
            <IoCloseSharp className="block h-auto w-10 text-accent" />
          </Button>
        )}
        <CategoriesButton />
        <SiteSearch />
        {!user ? <NavUser /> : <NavButtons />}
      </div>
    </div>
  );
};

export default NavBar;
