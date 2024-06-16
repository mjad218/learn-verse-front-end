import { ReactNode } from "react";
import { MaterialsList } from "../materials-list";
import { Row } from "@/components/shared/row";

type IProps = {
  courseId?: number | undefined;
  children?: ReactNode;
};

export const LearnLayout = (props: IProps) => {
  return (
    <Row className="flex flex-col gap-4 py-10 lg:flex-row">
      <div className="basis-10/12">{props.children}</div>
      <div className="basis-2/12">
        <MaterialsList courseId={props.courseId} />
      </div>
    </Row>
  );
};
