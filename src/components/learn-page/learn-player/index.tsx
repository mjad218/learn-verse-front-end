import { AddReview } from "../add-review";
import { CourseData } from "./course-date";
import { VideoPlayer } from "./player-client";

type IProps = {
  videoId?: number | undefined | string;
  courseId?: number | undefined | string;
};
export const LearnVideoPlayer = (props: IProps) => {
  return (
    <>
      <VideoPlayer videoId={props.videoId} />
      <CourseData courseId={props.courseId} />
      <AddReview courseId={props.courseId} />
    </>
  );
};
