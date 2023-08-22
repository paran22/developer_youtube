import React from "react";
import { formatKo } from "../utils/timeago";

export default function VideoCard({ video }) {
  const { thumbnails, channelTitle, title, publishedAt } = video.snippet;
  return (
    <div className="flex flex-col aspect-[5/4] max-w-md max-h-96">
      <img
        className="rounded-lg w-full"
        src={thumbnails.medium.url}
        alt={video.description}
      />
      <div className="flex grow- px-2 py-2 gap-2 items-start">
        <img
          className="w-9 h-9 rounded-full"
          src={thumbnails.medium.url}
          alt={channelTitle}
        />
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
