import { SingleCoursePage } from "@/components/single-course-page";

type IProps = {
  params: { slug: string };
};
const ServerSingleCoursePage = (props: IProps) => {
  return <SingleCoursePage slug={props.params.slug} />;
};

export default ServerSingleCoursePage;
