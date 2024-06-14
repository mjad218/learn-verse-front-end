import HeroCarousel from "./hero-carousel/MainCarousel";
import MainCarousel from "./main-carousel/MainCarousel";
import SecondaryCarousel from "./secondary-carousel/SecondaryCarousel";

const HomePage = () => {
  return (
    <>
      <HeroCarousel />
      <div className="my-4">
        <h1 className="mx-auto my-4 max-w-fit font-roboto text-3xl font-medium">
          Featured Courses
        </h1>
        <MainCarousel />
        <SecondaryCarousel />
      </div>
    </>
  );
};

export default HomePage;
