import { SingleCoursePage } from "@/components/single-course-page";

type IProps = {
  params: { courseId: string };
};
const ServerSingleCoursePage = (props: IProps) => {
  return <SingleCoursePage courseId={Number(props.params.courseId ?? 0)} />;
};

export default ServerSingleCoursePage;
