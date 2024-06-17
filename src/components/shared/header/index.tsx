import Link from "next/link";
import { Row } from "../row";
import { AppLogo } from "@/components/app-logo";
import NavBar from "../navbar/NavBar";

export const Header = () => {
  return (
    <div className="h-24">
      <div className="bg-accent10 fixed right-0 top-0 z-50 flex h-24 w-full shadow-md">
        <Row>
          <nav className="z-50 flex h-full w-full items-center justify-between border-b-[1px] border-b-slate-200 py-3">
            <Link href="/">
              <AppLogo className="h-auto w-40 text-accent" />
            </Link>
            <NavBar />
          </nav>
        </Row>
      </div>
    </div>
  );
};
