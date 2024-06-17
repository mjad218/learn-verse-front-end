import { CourseVideo } from "@/types/video.type";
import Link from "next/link";

type IProps = {
  videos?: CourseVideo[];
  courseId?: string | number | undefined}

export const MaterialsList = (props: IProps) => {
  return (
    <div>
      <ul className="m-0 list-none p-0 flex flex-col gap-2">
        {
          (props.videos?? []).map(v =>   <li key={v.id} className="bg-[#ddd] border border-solid border-[#eee] py-3 px-3 rounded-xl">
            <Link href={`/learn/${props.courseId}/${v.id}`}>{v?.title}</Link>
          </li>)
        }
      </ul>
    </div>
  );
};
