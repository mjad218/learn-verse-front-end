import MainCarousel from "./main-carousel/MainCarousel";
import SecondaryCarousel from "./secondary-carousel/SecondaryCarousel";

const HomePage = () => {
  return (
    <div className="my-4">
      <MainCarousel />
      <SecondaryCarousel />
    </div>
  );
};

export default HomePage;
