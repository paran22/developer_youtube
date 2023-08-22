import React from "react";
import VideoSummary from "../components/VideoSummary";
import { Link, useSearchParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useApiContext } from "../context/ApiContext";

export default function VideoListPage() {
  const [searchParams] = useSearchParams();
  const keyword = searchParams.get("keyword");
  const { api } = useApiContext();
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery(["videos", keyword], async () => api.getDummyVideos(keyword));
  return (
    <div className="w-4/5 mx-auto pt-4 pb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {isLoading ?? <p>Loading...</p>}
      {!error ?? <p>error...</p>}
      {videos && (
        <ul>
          {videos.map((video) => (
            <Link to={`/videos/${video.id.videoId}`} key={video.id.videoId}>
              <VideoSummary video={video} />
            </Link>
          ))}
        </ul>
      )}
    </div>
  );
}
