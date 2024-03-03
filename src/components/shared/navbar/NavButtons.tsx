import CustomNavLink from "./CustomNavLink";
const NavButtons = () => {
  const links = [
    { name: "Login", href: "/login" },
    { name: "Register", href: "/register" },
  ];

  return (
    <div className="mr-[50px] w-[300px] items-center justify-center gap-[30px] md:flex">
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
