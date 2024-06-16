"use client";
import Player from "next-video/player";

export const VideoPlayer = () => {
  return (
    <div>
      <Player
        src="https://www.youtube.com/watch?v=LXb3EKWsInQ"
        poster="https://www.mydomain.com/remote-poster.webp"
        blurDataURL="data:image/webp;base64,UklGRlA..."
      />
    </div>
  );
};
