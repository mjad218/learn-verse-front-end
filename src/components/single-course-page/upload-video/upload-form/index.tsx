"use client";
import { useAccessToken } from "@/components/current-user/context";
import { Button } from "@/components/ui/button";
import { API_URL } from "@/constants/api";
import { Course } from "@/types/course.type";
import { useState } from "react";

type IProps = {
  course?: Course | null;
};
export const UploadVideoForm = (props: IProps) => {
  const [video, setVideo] = useState<File | null | undefined>(null);
  const [message, setMessage] = useState<string>("");
  const { token } = useAccessToken();
  const handleUpload = async () => {
    if (!video || !props?.course?.id) return;
    try {
      const formData = new FormData();
      formData.append("file", video);
      let res = await fetch(`${API_URL}/videos/courses/${props.course.id}`, {
        method: "POST",
        body: formData,
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      if (!res.ok) {
        throw { message: res.statusText, status: res.status };
      }

      const f = await res.json();
      setMessage("Video Uploaded");
      return f;
    } catch (error) {
      setMessage("Error Occurred ");
    }
  };
  return (
    <div className="my-7 flex flex-col gap-3">
      <label htmlFor="video">Upload Video</label>
      <input
        type="file"
        accept="video/*"
        id="video"
        onChange={(e) =>
          setVideo(e.target.files?.length ? e.target.files[0] : null)
        }
      />
      <Button onClick={handleUpload}>Upload</Button>
      <p>{message}</p>
    </div>
  );
};
