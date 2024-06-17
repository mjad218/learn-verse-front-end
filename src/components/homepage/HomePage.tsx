import ContentSection from "./content-section";
import HeroCarousel from "./hero-carousel/MainCarousel";
import { JoinUs } from "./join";
import MainCarousel from "./main-carousel/MainCarousel";

const HomePage = () => {
  return (
    <>
      <HeroCarousel />
      <div className="my-4">
        <h1 className="mx-auto my-4 max-w-fit font-roboto text-3xl font-medium">
          Featured Courses
        </h1>
        <MainCarousel />
        <ContentSection />
      </div>
      <JoinUs/>

    </>
  );
};

export default HomePage;
