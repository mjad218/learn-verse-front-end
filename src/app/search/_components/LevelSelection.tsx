// const [level, setLevel] = useQueryState("level");

import { IoIosRadioButtonOn, IoIosRadioButtonOff } from "react-icons/io";
import { useQueryState } from "nuqs";
import { useRouter } from "next/navigation";
import { Text, Flex, Grid } from "@radix-ui/themes";

const LevelSelection = () => {
  const router = useRouter();
  const [level, setLevel] = useQueryState("level");

  const levels = [
    { name: "Beginner", value: "beginner" },
    { name: "Intermediate", value: "intermediate" },
    { name: "Advanced", value: "advanced" },
  ];

  const changeLevel = (value: string) => {
    setLevel(value);
    router.refresh();
  };

  return (
    <Flex direction={"column"}>
      {levels.map((Lvl) => (
        <Grid
          key={`lang-${Lvl.value}`}
          className="items-center justify-center py-1 hover:cursor-pointer hover:bg-neutral-200/80"
          columns={"7"}
          onClick={() => changeLevel(Lvl.value)}
        >
          <Flex
            style={{
              gridColumn: "3/4",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {level == Lvl.value ? (
              <IoIosRadioButtonOn size={23} />
            ) : (
              <IoIosRadioButtonOff size={23} />
            )}
          </Flex>
          <Text size={"4"} weight={"medium"} style={{ gridColumn: "4/7" }}>
            {Lvl.name}
          </Text>
        </Grid>
      ))}
    </Flex>
  );
};

export default LevelSelection;
