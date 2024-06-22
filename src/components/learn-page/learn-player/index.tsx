import { getCourseReviews } from "@/services/review/single-review";
import { CourseData } from "./course-date";
import { VideoPlayer } from "./player-client";
import { cookies } from "next/headers";
import { LearnCourseReviews } from "./list-reviews";

type IProps = {
  videoId?: number | undefined | string;
  courseId?: number | undefined | string;
};
export const LearnVideoPlayer = async (props: IProps) => {
  let token: string | null = "";
  try {
    const nextCookies = cookies();
    token = nextCookies.get("token")?.value ?? null;
    if (!token) throw "not logged in";
  } catch (error) {}
  const reviews = await getCourseReviews(props.courseId, token);
  return (
    <>
      <VideoPlayer videoId={props.videoId} />
      <CourseData courseId={props.courseId} />
      <LearnCourseReviews courseId={props.courseId} reviews={reviews} />
    </>
  );
};
