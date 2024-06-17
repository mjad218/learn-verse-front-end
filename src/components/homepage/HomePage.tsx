import ContentSection from "./content-section";
import HeroCarousel from "./hero-carousel/MainCarousel";
import { JoinUs } from "./join";
import MainCarousel from "./main-carousel/MainCarousel";

const HomePage = () => {
  return (
    <>
      <HeroCarousel />
      <div className="my-14">

      </div>
      <div className="my-4">
        <h1 className="mx-auto my-4 max-w-fit font-dmSerif text-3xl font-medium">
          Featured Courses
        </h1>
        <MainCarousel />

      </div>
      <ContentSection />

      <div className="my-14">

</div>
      <JoinUs/>

    </>
  );
};

export default HomePage;
