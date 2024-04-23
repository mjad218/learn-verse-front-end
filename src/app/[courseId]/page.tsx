import { SingleCoursePage } from "@/components/single-course-page";

type IProps = {
  params: { slug: string };
};
const ServerSingleCoursePage = (props: IProps) => {
  return <SingleCoursePage courseId={Number(props.params.slug ?? 0)} />;
};

export default ServerSingleCoursePage;
