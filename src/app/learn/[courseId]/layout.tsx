import { LearnLayout } from "@/components/learn-page/learn-layout";
import { ReactNode } from "react";

type IProps = {
  children?: ReactNode;
  params: {   courseId?: number | undefined| string 
  };
};

const LearnPageLayout = (props: IProps) => {
  return <LearnLayout courseId={props?.params?.courseId}>{props.children}</LearnLayout>;
};

export default LearnPageLayout;
