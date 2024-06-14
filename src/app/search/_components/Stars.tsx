// @ts-ignore
import ReactStars from "react-stars";
import { IoIosRadioButtonOn, IoIosRadioButtonOff } from "react-icons/io";
import { parseAsFloat, useQueryState } from "nuqs";
import { useRouter } from "next/navigation";

const Stars = ({ value }: { value: number }) => {
  const router = useRouter();

  const [rating, setRating] = useQueryState("rating", parseAsFloat);

  const changeRating = () => {
    setRating(value);
    router.refresh();
  };
  return (
    <div
      onClick={changeRating}
      className="grid grid-cols-7 place-items-center hover:cursor-pointer hover:bg-neutral-200/80"
    >
      <div
        style={{ gridColumn: " 1/4" }}
        className="flex items-center gap-2 pl-2"
      >
        {rating == value ? (
          <IoIosRadioButtonOn size={20} />
        ) : (
          <IoIosRadioButtonOff size={20} />
        )}
        <ReactStars edit={false} size={20} value={value} />
      </div>
      <span className="text-base font-thin" style={{ gridColumn: "4 / 8" }}>
        {value} Stars {value == 5 ? "" : "& above"}
      </span>
    </div>
  );
};

export default Stars;
