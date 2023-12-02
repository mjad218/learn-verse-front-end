import CarouselSlider from "@/components/ui/carousel/carousel";
import CategoriesMainBox from "@/components/ui/box-categories/SlidingCategories";

export default function Home() {
  return <main>
    <CarouselSlider className='mb-8' />
    <CategoriesMainBox />
  </main>;
}
