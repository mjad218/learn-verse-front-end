import { LearnPage } from "@/components/learn-page";

type IProps = {
  params: { courseId: string };
};
const ServerSingleLearnCoursePage = (props: IProps) => {
  return <LearnPage courseId={Number(props.params.courseId ?? 0)} />;
};

export default ServerSingleLearnCoursePage;
