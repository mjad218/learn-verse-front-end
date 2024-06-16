import { LearnLayout } from "@/components/learn-page/learn-layout";
import { ReactNode } from "react";

type IProps = {
  courseId?: number | undefined;
  children?: ReactNode;
};
const LearnPageLayout = (props: IProps) => {
  return <LearnLayout courseId={props.courseId}>{props.children}</LearnLayout>;
};

export default LearnPageLayout;
