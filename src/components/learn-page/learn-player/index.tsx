import { VideoPlayer } from "./player-client";
type IProps = {
  videoId?: number | undefined| string};
export const LearnVideoPlayer = (props: IProps) => {
  props.videoId;
  return (
      <VideoPlayer />
  );
};
