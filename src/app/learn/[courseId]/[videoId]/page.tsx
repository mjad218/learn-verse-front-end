import { LearnVideoPlayer } from "@/components/learn-page/learn-player";

type IProps = {
  params: {   videoId?: number | undefined| string 
  };
};
const VideoPage = (props: IProps) => {
  return (
      <LearnVideoPlayer videoId={props.params?.videoId}/>
  );
};

export default VideoPage;
