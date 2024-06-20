import { Row } from "@/components/shared/row";
import Image from "next/image";
import SecondaryHero from "@/../public/assets/secondary-hero.png";
const ContentSection = () => {
  return (
    <div className="my-4 bg-accent9/5 py-4 text-black">
      <Row>
        <div className="flex flex-col items-center justify-center gap-20 lg:flex-row">
          <Image
            src={SecondaryHero}
            alt="secondary-hero"
            height={400}
            className="block basis-4/12"
          />
          <div className="mt-12 flex basis-8/12 flex-col gap-4">
            <h2 className="font-dmSerif text-2xl font-bold">
              Unlock Your Potential with LearnVerse
            </h2>
            <p className="max-w-[450px] text-justify text-base text-slate-800">
              Kickstart your career in development and join thousands of
              learners worldwide. Access top-notch courses, master new skills,
              and achieve your goals. Sign up today and start your journey to
              success!
            </p>
          </div>
        </div>
      </Row>
    </div>
  );
};

export default ContentSection;
