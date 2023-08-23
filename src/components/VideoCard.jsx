import React from "react";
import { formatKo } from "../utils/timeago";
import { useNavigate } from "react-router-dom";

export const cardStyle = Object.freeze({
  large: "large",
  small: "small",
});

export function VideoCard({ video, style }) {
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
  const titleStyle =
    style === cardStyle.large
      ? "text-base md:text-lg font-semibold line-clamp-2"
      : "text-sm line-clamp-2";
  const dateStyle =
    style === cardStyle.large ? "text-xs sm:text-base opacity-80" : "text-xs";
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
          <p className={titleStyle}>{title}</p>
          {style === cardStyle.large && (
            <p className="text-xs sm:text-base opacity-80">{channelTitle}</p>
          )}
          <p className={dateStyle}>{formatKo(publishedAt, "ko")}</p>
        </div>
      </div>
    </div>
  );
}
