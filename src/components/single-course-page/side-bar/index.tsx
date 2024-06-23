"use client";
import { useCurrentUser } from "@/components/current-user/context";
import { Course } from "@/types/course.type";
import Link from "next/link";

type IProps = {
  className?: string | undefined;
  course?: Course | null;
};
export const CourseSideBar = (props: IProps) => {
  const { user } = useCurrentUser();
  const isOwner = props.course?.ownerId === user?.id;

  return (
    <div className={props.className}>
      {!isOwner && <h3 className="m-0 py-0 pb-3 text-2xl">Get Course</h3>}
      {isOwner && (
        <Link href={`/${props.course?.id}/learning`}>Go to Course</Link>
      )}
      <Link
        href={`/${props.course?.id}/checkout`}
        className="w-full rounded-xl bg-accent3 px-2 py-3 text-base font-bold text-white"
      >
        Check out
      </Link>
    </div>
  );
};
