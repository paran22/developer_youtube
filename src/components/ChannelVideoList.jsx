import React from "react";
import { useApiContext } from "../context/ApiContext";
import { useQuery } from "@tanstack/react-query";
import { VideoCard, cardStyle } from "./VideoCard";

export default function ChannelVideoList({ channelId }) {
  const { api } = useApiContext();
  const { data: videos } = useQuery(["videos", channelId], async () =>
    api.getDummyChannelVideo()
  );

  return (
    <>
      {videos && (
        <div className="h-56 flex gap-2 overflow-auto whitespace-nowrap">
          {videos.map((video) => (
            <VideoCard video={video} style={cardStyle.small} />
          ))}
        </div>
      )}
    </>
  );
}
