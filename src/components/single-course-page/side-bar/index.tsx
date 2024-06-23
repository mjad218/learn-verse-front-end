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
      {isOwner && (
        <Link
          className="w-full rounded-xl bg-accent3 px-2 py-3 text-base font-bold text-white"
          href={`learn/${props.course?.id}`}
        >
          Manage videos
        </Link>
      )}
      <Link
        href={`/${props.course?.id}/checkout`}
        className="w-full rounded-xl bg-accent3 px-2 py-3 text-base font-bold text-white"
      >
        Go to course
      </Link>
    </div>
  );
};
