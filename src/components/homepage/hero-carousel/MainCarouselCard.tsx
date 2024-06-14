import {
  Card,
  CardTitle,
  CardHeader,
  CardDescription,
} from "@/components/ui/card";
type IProps = {
  image: string;
  description: string;
  title: string;
};
const HeroCarouselCard = (props: IProps) => {
  return (
    <Card
      className="relative m-0 flex
       h-[90vh] w-full cursor-pointer rounded-none border-none bg-cover bg-center p-0 outline-none"
      style={{
        backgroundImage: `url('${props.image}')`,
      }}
    >
      <CardHeader className=" flex h-full w-full items-center justify-center bg-zinc-800/50">
        <div className="flex flex-col items-center justify-center gap-4">
          <CardTitle className="font-dmSerif text-6xl  font-bold text-gray-200">
            {props.title}
          </CardTitle>
          <CardDescription className=" font-roboto text-2xl   font-medium text-gray-200">
            {props.description}
          </CardDescription>
        </div>
      </CardHeader>
    </Card>
  );
};

export default HeroCarouselCard;
