import React from "react";

export default function VideoCard({ video }) {
  return (
    <div className="flex flex-col aspect-[5/4] mx-4 my-3 max-w-md max-h-96">
      <img
        className="rounded-lg object-cover w-full h-4/6"
        src={video.snippet.thumbnails.medium.url}
        alt={video.description}
      />
      <div className="flex grow- px-2 py-2 gap-2 items-start">
        <img
          className="w-9 h-9 rounded-full"
          src={video.snippet.thumbnails.medium.url}
          alt={video.snippet.channelTitle}
        />
        <div className="flex-col">
          <p className="text-base md:text-lg">{video.snippet.title}</p>
          <p className="text-xs md:text-base">{video.snippet.channelTitle}</p>
          <p className="text-xs md:text-base">{video.snippet.publishTime}</p>
        </div>
      </div>
    </div>
  );
}
