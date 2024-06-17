import { ReactNode } from "react";
import { MaterialsList } from "../materials-list";
import { Row } from "@/components/shared/row";
import { getCourseVideos } from "@/services/courses/single-course";

type IProps = {
  courseId?: number | undefined| string;
    children?: ReactNode;
};

export const LearnLayout =async (props: IProps) => {
  const videos = await getCourseVideos(props.courseId)
  return (
    <Row className="flex flex-col gap-4 py-10 lg:flex-row">
      <div className="basis-10/12">{props.children}</div>
      <div className="basis-2/12">
        <MaterialsList courseId={props.courseId} videos={videos} />
      </div>
    </Row>
  );
};
