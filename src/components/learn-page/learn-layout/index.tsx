import { ReactNode } from "react";
import { MaterialsList } from "../materials-list";
import { Row } from "@/components/shared/row";
import { getCourseVideos } from "@/services/courses/single-course";
import { cookies } from "next/headers";

type IProps = {
  courseId?: number | undefined | string;
  children?: ReactNode;
};

export const LearnLayout = async (props: IProps) => {
  let token: string | null = "";
  try {
    const nextCookies = cookies();
    token = nextCookies.get("token")?.value ?? null;
    if (!token) throw "not logged in";
  } catch (error) {}

  const videos = await getCourseVideos(props.courseId, token);
  return (
    <Row className="flex flex-col gap-4 py-10 lg:flex-row">
      <div className="basis-10/12">{props.children}</div>
      <div className="basis-2/12">
        <MaterialsList courseId={props.courseId} videos={videos} />
      </div>
    </Row>
  );
};
