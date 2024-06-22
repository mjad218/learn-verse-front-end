import { UploadVideoPage } from "@/components/single-course-page/upload-video";

type IProps = {
  params: { courseId: string };
};
const UploadVideo = (props: IProps) => {
  return (
    <div>
      <UploadVideoPage courseId={props.params?.courseId} />
    </div>
  );
};

export default UploadVideo;
