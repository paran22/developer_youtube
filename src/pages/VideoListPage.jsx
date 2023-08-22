import React from "react";
import VideoCard from "../components/VideoCard";
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
    <div className="w-4/5 mx-auto pt-4 pb-10">
      {isLoading ?? <p>Loading...</p>}
      {!error ?? <p>error...</p>}
      {videos && (
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 gap-y-4">
          {videos.map((video) => (
            <Link to={`/videos/${video.id.videoId}`} key={video.id.videoId}>
              <VideoCard video={video} />
            </Link>
          ))}
        </ul>
      )}
    </div>
  );
}
