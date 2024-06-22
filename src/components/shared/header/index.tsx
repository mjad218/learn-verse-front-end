import Link from "next/link";
import { Row } from "../row";
import { AppLogo } from "@/components/app-logo";
import NavBar from "../navbar/NavBar";
import { getAllCategories } from "@/services/courses/multi-course";
import { cookies } from "next/headers";

export const Header = async () => {
  let token: string | null = "";
  try {
    const nextCookies = cookies();
    token = nextCookies.get("token")?.value ?? null;
    if (!token) throw "not logged in";
  } catch (error) {}
  const categories = await getAllCategories(token);

  return (
    <div className="h-24">
      <div className="fixed right-0 top-0 z-[100000] flex h-24 w-full bg-accent10 shadow-md">
        <Row>
          <nav className="z-50 flex h-full w-full items-center justify-between gap-2 border-b-[1px] border-b-slate-200 py-3 lg:justify-center">
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
