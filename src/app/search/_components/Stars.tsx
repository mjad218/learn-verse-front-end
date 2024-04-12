// @ts-ignore
import ReactStars from "react-stars";
import { parseAsFloat, useQueryState } from "nuqs";
import { useRouter } from "next/navigation";
import { Grid, Text, Box } from "@radix-ui/themes";

const Stars = ({ value }: { value: number }) => {
  const router = useRouter();
  
  const [, setRating] = useQueryState("rating", parseAsFloat);

  const changeRating = () => {
    setRating(value);
    router.refresh();
  };
  return (
    <Grid
      onClick={changeRating}
      columns={"5"}
      className="place-items-center hover:cursor-pointer hover:bg-neutral-200/80"
    >
      <Box style={{ gridColumn: " 1/3" }}>
        <ReactStars edit={false} size={24} value={value} />
      </Box>
      <Text size={"4"} className="font-thin" style={{ gridColumn: "3 / 6" }}>
        {value} Stars {value == 5 ? "" : "& above"}
      </Text>
    </Grid>
  );
};

export default Stars;
