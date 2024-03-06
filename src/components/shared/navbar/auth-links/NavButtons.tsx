"use client";
import { useCurrentUser } from "@/components/current-user/context";
import CustomNavLink from "./CustomNavLink";
import Dropdown from "./Dropdown";
const NavButtons = () => {
  const links_loggedOut = [
    { name: "Login", href: "/login" },
    { name: "Register", href: "/register" },
  ];

  const { user } = useCurrentUser();
  return (
    <div className="flex w-44 max-w-44 items-center justify-center gap-6">
      {!user &&
        links_loggedOut.map((link) => (
          <CustomNavLink
            href={link.href}
            name={link.name}
            key={link.name.toLowerCase()}
          />
        ))}
      {user && <Dropdown user={user} />}
    </div>
  );
};

export default NavButtons;
