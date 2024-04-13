import { Flex, Box, Grid, Text } from "@radix-ui/themes";
import Image from "next/image";
import { FaStar } from "react-icons/fa";

const CourseCard = () => {
  return (
    <Grid
      rows={"5"}
      className="h-[250px] w-[300px] rounded-2xl border border-t-0 border-slate-400"
    >
      <Box
        className="rounded-t-2xl"
        style={{ gridRow: "1/4", overflow: "hidden" }}
      >
        <Image
          src={"/assets/TempImages/TempCourse.jpg"}
          alt="course"
          width={`${300}`}
          height={`${150}`}
          style={{ objectFit: "cover" }}
        />
      </Box>
      <Grid
        rows={"3"}
        align={"center"}
        justify={"center"}
        my="2"
        style={{ gridRow: "4/6" }}
      >
        <Text size="4" style={{ gridRow: "1/2" }}>
          Course Title
        </Text>
        <Text size="3" style={{ gridRow: "2/3" }}>
          Course Creator
        </Text>
        <Flex className="mx-8 justify-between" style={{ gridRow: "3/4" }}>
          <Text size={"2"}>Price: $</Text>
          <FaStar color="gold" />
        </Flex>
      </Grid>
    </Grid>
  );
};

export default CourseCard;
