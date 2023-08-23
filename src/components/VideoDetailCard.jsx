import React from "react";
import { useApiContext } from "../context/ApiContext";
import { useQuery } from "@tanstack/react-query";

export default function VideoDetailCard({ videoId, channelId }) {
  const { api } = useApiContext();
  const {
    isLoadingInChannel,
    hasErrorInChannel,
    data: channel,
  } = useQuery(["channels", channelId], async () => api.getDummyChannel());
  const {
    isLoadingInVideo,
    hasErrorInVideo,
    data: video,
  } = useQuery(["video", videoId], async () => api.getDummyVideo());
  return (
    <>
      {isLoadingInChannel && <p>Loading...</p>}
      {isLoadingInVideo && <p>Loading...</p>}
      {hasErrorInChannel && <p>error...</p>}
      {hasErrorInVideo && <p>error...</p>}
      {channel && video && (
        <section className="flex flex-col gap-2">
          <iframe
            className="w-full aspect-video"
            title={video.snippet.title}
            id="ytplayer"
            type="text/html"
            src={`https://www.youtube.com/embed/${videoId}`}
            frameborder="0"
            allowfullscreen
          />
          <p className="font-bold">{video.snippet.channeltitle}</p>
          <section className="flex items-center gap-3">
            <img
              className="w-9 h-9 rounded-full"
              src={channel.snippet.thumbnails.medium.url}
              alt={""}
            />
            <p className="opacity-90 font-semibold">{channel.snippet.title}</p>
          </section>
          <p className="whitespace-pre-line pt-4">
            {video.snippet.description}
          </p>
        </section>
      )}
    </>
  );
}
