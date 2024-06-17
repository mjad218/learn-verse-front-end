"use client";
import { API_URL } from "@/constants/api";
import Player from "next-video/player";
type IProps = {
  videoId?: number | undefined| string};

export const VideoPlayer = (props:IProps) => {
  const url = `${API_URL}/videos/download/${props.videoId}`
  return (
    <div>
      <Player
        src={url}
        poster="https://www.mydomain.com/remote-poster.webp"
        blurDataURL="data:image/webp;base64,UklGRlA..."
      />
    </div>
  );
};
