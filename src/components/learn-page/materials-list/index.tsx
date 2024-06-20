import { CourseVideo } from "@/types/video.type";
import Link from "next/link";
import { TbHourglassEmpty } from "react-icons/tb";

type IProps = {
  videos?: CourseVideo[];
  courseId?: string | number | undefined;
};

export const MaterialsList = (props: IProps) => {
  if (!props.videos?.length)
    return (
      <div className="flex items-center justify-center gap-3">
        <TbHourglassEmpty className="w-32 text-accent3" />
        <p>No Videos</p>
      </div>
    );
  return (
    <div>
      <ul className="m-0 flex list-none flex-col gap-2 p-0">
        {(props.videos ?? []).map((v) => (
          <li
            key={v.id}
            className="rounded-xl border border-solid border-[#eee] bg-[#ddd] px-3 py-3"
          >
            <Link href={`/learn/${props.courseId}/${v.id}`}>{v?.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
