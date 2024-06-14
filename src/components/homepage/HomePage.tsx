import HeroCarousel from "./hero-carousel/MainCarousel";
import MainCarousel from "./main-carousel/MainCarousel";

const HomePage = () => {
  return (
    <>
      <HeroCarousel />
      <div className="my-4">
        <h1 className="font-roboto mx-auto my-4 max-w-fit text-3xl font-medium">
          Featured Courses
        </h1>
        <MainCarousel />
      </div>
    </>
  );
};

export default HomePage;
