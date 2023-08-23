import React from "react";
import { useLocation } from "react-router-dom";
import VideoDetailCard from "../components/VideoDetailCard";

export default function VideoDetailPage() {
  const location = useLocation();
  const channelId = location.state.channelId;
  const videoId = location.state.vedioId;
  return (
    <section className="w-5/6 mx-auto py-4 flex">
      <VideoDetailCard videoId={videoId} channelId={channelId} />
    </section>
  );
}
