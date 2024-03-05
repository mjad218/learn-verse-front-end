import CustomNavLink from "./CustomNavLink";
const NavButtons = () => {
  const links = [
    { name: "Login", href: "/login" },
    { name: "Register", href: "/register" },
  ];

  return (
    <div className="flex w-44 max-w-44 items-center justify-center gap-6">
      {links.map((link) => (
        <CustomNavLink
          href={link.href}
          name={link.name}
          key={link.name.toLowerCase()}
        />
      ))}
    </div>
  );
};

export default NavButtons;
