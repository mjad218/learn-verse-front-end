import { Box, Flex, Heading, Text, Grid } from "@radix-ui/themes";
import { MissionText } from "./_definitions";
import Image from "next/image";
import eLearningImage from '@/../public/assets/about/e-learning.jpg'
const AboutPage = () => {
  return (
    <Box className="">
      <div className="relative lg:h-[400px] 2xl:h-[600px] w-full">
        <Box className="bg-[url('/assets/about/cropped-about-background.png')]
                      absolute inset-0 bg-cover bg-center z-0"></Box>
        <div className="opacity-0 hover:opacity-100 duration-300 absolute
         inset-0 z-10 flex justify-center items-center text-6xl font-semibold">
          <Text
            size={{ lg: "7", xl: "8" }}
            weight={"bold"}
            className="font-roboto text-gray-900 w-full text-center bg-zinc-300/60"
          >
            LearnVerse is committed to assisting Individuals in realizing their
            career prospects
          </Text>
        </div>
      </div>
      <Box className="w-[90%] mx-auto">
        <Flex
          className="font-roboto my-4"
          direction={"column"}
          align={"center"}
          justify={"center"}
          gap={'4'}
        >
          <Heading size={"8"} weight="bold">
            Mission Statement
          </Heading>
          <Grid columns={'2' as never} gapX={'8'}>
            <Text size={{ lg: '5', xl: '8' }} align={'left'} weight={'medium'} className="leading-loose font-roboto" id='mission'>
              {MissionText}
            </Text>
            <Image
              src={eLearningImage}
              alt='people collaborating'
              quality={80}
            />
          </Grid>
        </Flex>
      </Box>
    </Box >
  );
};

export default AboutPage;
