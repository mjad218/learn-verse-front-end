import MainCarousel from "./main-carousel/MainCarousel";
import SecondaryCarousel from "./secondary-carousel/SecondaryCarousel";

const HomePage = () => {
  return (
    <div className="my-4">
      <h1 className="font-roboto mx-auto my-4 max-w-fit text-3xl font-medium">
        Featured Courses
      </h1>
      <MainCarousel />
      <SecondaryCarousel />
    </div>
  );
};

export default HomePage;
