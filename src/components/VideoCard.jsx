import React from "react";
import { formatKo } from "../utils/timeago";
import { useNavigate } from "react-router-dom";

export default function VideoCard({ video }) {
  const { thumbnails, channelTitle, title, publishedAt } = video.snippet;
  const navigate = useNavigate();
  const navigateDetail = (video) => {
    navigate(`/videos/${video.id.videoId}`, {
      state: {
        channelId: video.snippet.channelId,
        vedioId: video.id.videoId,
      },
    });
  };
  return (
    <div
      className="flex flex-col aspect-[5/4] max-w-md max-h-96"
      onClick={() => navigateDetail(video)}
    >
      <img
        className="rounded-lg w-full"
        src={thumbnails.medium.url}
        alt={video.description}
      />
      <div className="flex grow- px-2 py-2 gap-2 items-start">
        <div className="flex-col">
          <p className="text-base md:text-lg font-semibold line-clamp-2">
            {title}
          </p>
          <p className="text-xs sm:text-base opacity-80">{channelTitle}</p>
          <p className="text-xs sm:text-base opacity-80">
            {formatKo(publishedAt, "ko")}
          </p>
        </div>
      </div>
    </div>
  );
}
