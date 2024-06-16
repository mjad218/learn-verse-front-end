import { IoIosRadioButtonOn, IoIosRadioButtonOff } from "react-icons/io";
import { useQueryState } from "nuqs";
import { useRouter } from "next/navigation";

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
    <div className="flex flex-col">
      {languages.map((language) => (
        <div
          key={`lang-${language.value}`}
          className="grid grid-cols-9 items-center justify-center py-1 hover:cursor-pointer hover:bg-neutral-200/80"
          onClick={() => changeLang(language.value)}
        >
          <div
            className="mx-auto"
            style={{
              gridColumn: "4/5",
            }}
          >
            {lang == language.value ? (
              <IoIosRadioButtonOn size={23} />
            ) : (
              <IoIosRadioButtonOff size={23} />
            )}
          </div>
          <span style={{ gridColumn: "5/7" }} className="text-md font-medium">
            {language.name}
          </span>
        </div>
      ))}
    </div>
  );
};

export default LanguageSelection;
