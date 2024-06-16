import { VideoPlayer } from "./player-client";
type IProps = {
  videoId?: number | undefined;
};
export const LearnVideoPlayer = (props: IProps) => {
  props.videoId;
  return (
    <div>
      <VideoPlayer />
    </div>
  );
};
