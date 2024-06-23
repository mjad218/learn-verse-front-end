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
import { Row } from "../row";
import { Category } from "@/types/course.type";
import { toTitleCase } from "@/lib/utils";

type IProps = {
  categories: Category[];
};
const Footer = async (props: IProps) => {
  const icons = [BsFacebook, BsYoutube, BsLinkedin, BsTwitter, BsInstagram];

  let title_caseCategories: Category[] =
    props.categories.map((category) => ({
      ...category,
      nameEn: toTitleCase(category.nameEn),
    })) || [];

  title_caseCategories = title_caseCategories.slice(0, 6);

  return (
    <footer className="text-md relative z-10 mt-auto flex w-full flex-col justify-center bg-[#0C090A] pb-6 pt-4 text-sm">
      <Row>
        <div className="flex flex-col justify-between gap-10 pb-4 text-white lg:flex-row">
          <div className="list-none">
            <p className="text-lg font-bold">Company</p>
            <ul className="m-0 p-0">
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
            <ul className="m-0 p-0">
              {(title_caseCategories ?? []).map((item) => (
                <li className="my-2" key={item?.id}>
                  <Link href={`/categories/${item?.id}`}>{item.nameEn}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="list-none">
            <p className="text-lg font-bold">Help</p>
            <ul className="m-0 p-0">
              {footerHelpLinks.map((link) => (
                <li key={link.slug} className="my-2">
                  <Link href={link.slug}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <FooterForm />
        </div>
        <div className="flex flex-col justify-center gap-2 self-center">
          <p className="self-center font-roboto text-sm text-white">
            © 2024 LearnVerse. All rights reserved.
          </p>
          <div className="flex gap-6 self-center">
            {icons.map((icon) => (
              <FooterIcon Icon={icon} key={icon.name} />
            ))}
          </div>
        </div>
      </Row>
    </footer>
  );
};

export default Footer;
