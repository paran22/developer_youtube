import React from "react";
import { useApiContext } from "../context/ApiContext";
import { useQuery } from "@tanstack/react-query";
import { VideoCard, cardStyle } from "./VideoCard";

export default function HorizontalVideoList({ channelId }) {
  const { api } = useApiContext();
  const { data: videos } = useQuery(
    ["videos", channelId],
    async () => api.getChannelVideos(channelId),
    {
      staleTime: 1000 * 60 * 5,
    }
  );
  return (
    <>
      {videos && (
        <div className="h-56 flex gap-2 overflow-auto whitespace-nowrap">
          {videos.map((video) => (
            <VideoCard
              key={video.id.videoId}
              video={video}
              style={cardStyle.small}
            />
          ))}
        </div>
      )}
    </>
  );
}
