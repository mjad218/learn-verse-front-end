import { Row } from "@/components/shared/row";
import Image from "next/image";
import SecondaryHero from "@/../public/assets/secondary-hero.png";
import Link from "next/link";
const ContentSection = () => {
  return (
    <div className="my-4 bg-accent9/5 py-4 text-black">
      <Row>
        <div className="flex lg:flex-row flex-col gap-20 items-center justify-center ">
            <Image src={SecondaryHero} alt="secondary-hero" height={400} className="basis-4/12 block"/>
          <div className="mt-12 basis-8/12 flex flex-col gap-4">
              <h2 className=" font-dmSerif text-2xl font-bold">
                Unlock Your Potential with LearnVerse
              </h2>
              <p className=" text-justify text-base text-slate-800 max-w-[450px]">
                Kickstart your career in development and join thousands of
                learners worldwide. Access top-notch courses, master new skills,
                and achieve your goals. Sign up today and start your journey to
                success!
              </p>
              <Link href={"/auth/register"} className="mt-6 bg-[#FFBB02] transition-transform delay-75 ease-in-out hover:scale-110 hover:bg-[#FFBB02] text-slate-800 font-dmSerif py-1 px-6 rounded-3xl w-fit text-base">
                  Sign Up
              </Link>

          </div>
        </div>
      </Row>
    </div>
  );
};

export default ContentSection;
