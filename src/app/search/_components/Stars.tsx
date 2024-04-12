// @ts-ignore
import ReactStars from "react-stars";
import { IoIosRadioButtonOn, IoIosRadioButtonOff } from "react-icons/io";
import { parseAsFloat, useQueryState } from "nuqs";
import { useRouter } from "next/navigation";
import { Grid, Text, Flex } from "@radix-ui/themes";

const Stars = ({ value }: { value: number }) => {
  const router = useRouter();

  const [rating, setRating] = useQueryState("rating", parseAsFloat);

  const changeRating = () => {
    setRating(value);
    router.refresh();
  };
  return (
    <Grid
      onClick={changeRating}
      columns={"7"}
      className="place-items-center hover:cursor-pointer hover:bg-neutral-200/80"
    >
      <Flex gap="2" pl={"2"} align={"center"} style={{ gridColumn: " 1/4" }}>
        {rating == value ? (
          <IoIosRadioButtonOn size={20} />
        ) : (
          <IoIosRadioButtonOff size={20} />
        )}
        <ReactStars edit={false} size={20} value={value} />
      </Flex>
      <Text size={"4"} className="font-thin" style={{ gridColumn: "4 / 8" }}>
        {value} Stars {value == 5 ? "" : "& above"}
      </Text>
    </Grid>
  );
};

export default Stars;
