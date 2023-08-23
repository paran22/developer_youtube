import React from "react";
import { useApiContext } from "../context/ApiContext";
import { useQuery } from "@tanstack/react-query";
import ChannelInfo from "./ChannelInfo";

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
            className="aspect-video"
            title={video.snippet.title}
            id="ytplayer"
            type="text/html"
            src={`https://www.youtube.com/embed/${videoId}`}
            frameborder="0"
            allowfullscreen
          />
          <p className="font-bold">{video.snippet.title}</p>
          <ChannelInfo channel={channel.snippet} />
          <p className="whitespace-pre-line pt-4">
            {video.snippet.description}
          </p>
        </section>
      )}
    </>
  );
}
