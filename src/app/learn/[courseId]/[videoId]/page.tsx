import { LearnVideoPlayer } from "@/components/learn-page/learn-player";

type IProps = {
  videoId?: number | undefined;
};
const VideoPage = (props: IProps) => {
  return (
    <div>
      <LearnVideoPlayer />
    </div>
  );
};

export default VideoPage;
