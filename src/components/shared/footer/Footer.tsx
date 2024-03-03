import { navigationItems } from "@/constants";
import Link from "next/link";
import {
  footerCompanyLinks,
  footerHelpLinks,
  FooterForm,
  FooterIcon,
} from "./footer-data";
import {
  BsFacebook,
  BsYoutube,
  BsLinkedin,
  BsTwitter,
  BsInstagram,
} from "react-icons/bs";
const Footer = () => {
  const icons = [BsFacebook, BsYoutube, BsLinkedin, BsTwitter, BsInstagram];

  return (
    <footer className="flex w-full flex-col justify-center bg-[#0C090A] py-6 text-xs">
      {/*Top Section*/}
      <div className="flex flex-row justify-around pb-4 text-white">
        <div className="list-none">
          <p className="text-lg font-bold">Company</p>
          <ul>
            {footerCompanyLinks.map((link) => (
              <li key={link.slug} className="my-2">
                <Link href={link.slug}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="list-none">
          {/* Categories Section */}
          <p className="text-lg font-bold">Top Categories</p>
          <ul>
            {navigationItems.map((item) => (
              <li key={item.name} className="my-2">
                <Link href={`/categories/${item.slug}`}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="list-none">
          <p className="text-lg font-bold">Help</p>
          <ul>
            {footerHelpLinks.map((link) => (
              <li key={link.slug} className="my-2">
                <Link href={link.slug}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <FooterForm />
      </div>
      {/* Bottom Section */}
      <div className="flex flex-col justify-center gap-2 self-center">
        <p className="font-roboto text-sm text-white">
          © 2024 LearnVerse. All rights reserved.
        </p>
        <div className="flex gap-6 self-center">
          {icons.map((icon) => (
            <FooterIcon Icon={icon} key={icon.name} />
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
