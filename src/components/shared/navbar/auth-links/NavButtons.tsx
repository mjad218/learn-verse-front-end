"use client";
import { useCurrentUser } from "@/components/current-user/context";
import CustomNavLink from "./CustomNavLink";
import { ButtonPropsType } from "./CustomNavLink";

const NavButtons = () => {
  const links_loggedOut: ButtonPropsType[] = [
    { name: "Login", href: "/auth/login", variant: "default" },
    { name: "Register", href: "/auth/register", variant: "outline" },
  ];

  const { user } = useCurrentUser();

  if (user) return null;

  return (
    <div className="flex items-center justify-center gap-4">
      {links_loggedOut.map((link) => (
        <CustomNavLink
          href={link.href}
          name={link.name}
          variant={link.variant}
          key={link.name.toLowerCase()}
        />
      ))}
    </div>
  );
};

export default NavButtons;
