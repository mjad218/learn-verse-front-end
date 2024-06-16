import { Row } from "@/components/shared/row";
import Image from "next/image";
import SecondaryHero from "@/../public/assets/secondary-hero.png";
import { Button } from "@/components/ui/button";
import Link from "next/link";
const ContentSection = () => {
  return (
    <div className="my-4 bg-accent9/5 py-4 text-black">
      <Row>
        <div className="grid grid-cols-2">
          <div className="">
            <Image src={SecondaryHero} alt="secondary-hero" height={400} />
          </div>
          <div className="mt-12 flex flex-col items-center gap-4">
            <div className="mx-auto w-[85%]">
              <h2 className="text-center font-roboto text-2xl font-bold">
                Unlock Your Potential with LearnVerse
              </h2>
            </div>
            <div className="mx-auto w-[85%] text-justify">
              <span className="font-roboto text-lg font-semibold">
                Kickstart your career in development and join thousands of
                learners worldwide. Access top-notch courses, master new skills,
                and achieve your goals. Sign up today and start your journey to
                success!
              </span>
            </div>
            <div className="mt-2">
              <Link href={"/auth/register"}>
                <Button className="rounded-2xl bg-[#FFBB02] px-[15px] py-[11px] font-roboto text-xl text-[#2E3192] transition-transform delay-75 ease-in-out hover:scale-110 hover:bg-[#FFBB02]">
                  Sign Up
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </Row>
    </div>
  );
};

export default ContentSection;
