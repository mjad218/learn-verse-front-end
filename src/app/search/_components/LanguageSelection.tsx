import { IoIosRadioButtonOn, IoIosRadioButtonOff } from "react-icons/io";
import { useQueryState } from "nuqs";
import { useRouter } from "next/navigation";
import { Text, Flex, Grid } from "@radix-ui/themes";

const LanguageSelection = () => {
  const router = useRouter();
  const [lang, setLang] = useQueryState("lang");

  const languages = [
    { name: "English", value: "en" },
    { name: "Arabic", value: "ar" },
  ];

  const changeLang = (value: string) => {
    setLang(value);
    router.refresh();
  };

  return (
    <Flex direction={"column"}>
      {languages.map((language) => (
        <Grid
          key={`lang-${language.value}`}
          className="items-center justify-center py-1 hover:cursor-pointer hover:bg-neutral-200/80"
          columns={"7"}
          onClick={() => changeLang(language.value)}
        >
          <Flex
            style={{
              gridColumn: "3/4",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {lang == language.value ? (
              <IoIosRadioButtonOn size={23} />
            ) : (
              <IoIosRadioButtonOff size={23} />
            )}
          </Flex>
          <Text size={"4"} weight={"medium"} style={{ gridColumn: "4/6" }}>
            {language.name}
          </Text>
        </Grid>
      ))}
    </Flex>
  );
};

export default LanguageSelection;
