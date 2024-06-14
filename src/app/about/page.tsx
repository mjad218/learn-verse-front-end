import { MissionText } from "./_definitions";
import Image from "next/image";
import eLearningImage from "@/../public/assets/about/e-learning.jpg";
const AboutPage = () => {
  return (
    <div>
      <div className="relative w-full lg:h-[400px] 2xl:h-[600px]">
        <div className="absolute inset-0 z-0 bg-[url('/assets/about/cropped-about-background.png')] bg-cover bg-center"></div>
        <div
          className="absolute inset-0 z-10 flex
         items-center justify-center text-6xl font-semibold opacity-0 duration-300 hover:opacity-100"
        >
          <span className="font-roboto w-full bg-zinc-300/60 text-center text-lg font-bold text-gray-900">
            LearnVerse is committed to assisting Individuals in realizing their
            career prospects
          </span>
        </div>
      </div>
      <div className="mx-auto w-[90%]">
        <div className="font-roboto my-4 flex flex-col items-center justify-center gap-4">
          <h2 className="text-lg font-bold">Mission Statement</h2>
          <div className="grid grid-cols-5 gap-x-8">
            <span
              className="font-roboto col-span-3 text-left text-lg font-medium leading-snug 2xl:leading-normal"
              id="mission"
            >
              {MissionText}
            </span>
            <Image
              src={eLearningImage}
              alt="people collaborating"
              quality={95}
              className="col-span-2 object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
