"use client";
import { API_URL } from "@/constants/api";
import Player from "next-video/player";
type IProps = {
  videoId?: number | undefined | string;
};

const keyStr =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

const triplet = (e1: number, e2: number, e3: number) =>
  keyStr.charAt(e1 >> 2) +
  keyStr.charAt(((e1 & 3) << 4) | (e2 >> 4)) +
  keyStr.charAt(((e2 & 15) << 2) | (e3 >> 6)) +
  keyStr.charAt(e3 & 63);

export const rgbDataURL = (r: number, g: number, b: number) =>
  `data:image/gif;base64,R0lGODlhAQABAPAA${
    triplet(0, r, g) + triplet(b, 255, 255)
  }/yH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==`;

const randomBlurDataImg = rgbDataURL(144, 189, 170);

export const VideoPlayer = (props: IProps) => {
  const url = `${API_URL}/videos/download/${props.videoId}`;
  return (
    <div>
      <Player src={url} blurDataURL={randomBlurDataImg}  />
    </div>
  );
};
