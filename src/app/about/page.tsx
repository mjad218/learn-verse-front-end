import { Box, Flex, Heading, Text, Grid } from "@radix-ui/themes";
import { MissionText } from "./_definitions";
import Image from "next/image";
import eLearningImage from "@/../public/assets/about/e-learning.jpg";
const AboutPage = () => {
  return (
    <Box className="">
      <div className="relative w-full lg:h-[400px] 2xl:h-[600px]">
        <Box className="absolute inset-0 z-0 bg-[url('/assets/about/cropped-about-background.png')] bg-cover bg-center"></Box>
        <div
          className="absolute inset-0 z-10 flex
         items-center justify-center text-6xl font-semibold opacity-0 duration-300 hover:opacity-100"
        >
          <Text
            size={{ lg: "7", xl: "8" }}
            weight={"bold"}
            className="w-full bg-zinc-300/60 text-center font-roboto text-gray-900"
          >
            LearnVerse is committed to assisting Individuals in realizing their
            career prospects
          </Text>
        </div>
      </div>
      <Box className="mx-auto w-[90%]">
        <Flex
          className="my-4 font-roboto"
          direction={"column"}
          align={"center"}
          justify={"center"}
          gap={"4"}
        >
          <Heading size={"8"} weight="bold">
            Mission Statement
          </Heading>
          <Grid columns={"5" as never} gapX={"8"}>
            <Text
              size={{ lg: "5", xl: "8" }}
              align={"left"}
              weight={"medium"}
              className="col-span-3 font-roboto leading-snug 2xl:leading-normal"
              id="mission"
            >
              {MissionText}
            </Text>
            <Image
              src={eLearningImage}
              alt="people collaborating"
              quality={95}
              className="col-span-2 object-cover"
            />
          </Grid>
        </Flex>
      </Box>
    </Box>
  );
};

export default AboutPage;
