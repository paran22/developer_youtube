import React from "react";
import { format } from "timeago.js";
import { formatKo } from "../utils/timeago";

export default function VideoCard({ video }) {
  const { thumbnails, channelTitle, title, publishedAt } = video.snippet;
  return (
    <li className="flex flex-col aspect-[5/4] mx-4 my-3 max-w-md max-h-96">
      <img
        className="rounded-lg object-cover w-full h-4/6"
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
          <p className="text-base md:text-lg">{title}</p>
          <p className="text-xs md:text-base">{channelTitle}</p>
          <p className="text-xs md:text-base">{formatKo(publishedAt)}</p>
        </div>
      </div>
    </li>
  );
}
