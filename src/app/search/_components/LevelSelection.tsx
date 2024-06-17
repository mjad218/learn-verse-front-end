import { IoIosRadioButtonOn, IoIosRadioButtonOff } from "react-icons/io";
import { useQueryState } from "nuqs";
import { useRouter } from "next/navigation";
import {
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

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
    <AccordionItem value="level">
      <AccordionTrigger className="justify-center gap-4">
        Level
      </AccordionTrigger>
      <AccordionContent>
        <div className="flex flex-col">
          {levels.map((Lvl) => (
            <div
              key={`lang-${Lvl.value}`}
              className="grid grid-cols-7 items-center justify-center py-1 hover:cursor-pointer hover:bg-neutral-200/80"
              onClick={() => changeLevel(Lvl.value)}
            >
              <div
                className="flex items-center justify-center"
                style={{
                  gridColumn: "3/4",
                }}
              >
                {level == Lvl.value ? (
                  <IoIosRadioButtonOn size={23} />
                ) : (
                  <IoIosRadioButtonOff size={23} />
                )}
              </div>
              <span
                style={{ gridColumn: "4/6" }}
                className="text-md font-medium"
              >
                {Lvl.name}
              </span>
            </div>
          ))}
        </div>
      </AccordionContent>
    </AccordionItem>
  );
};

export default LevelSelection;
