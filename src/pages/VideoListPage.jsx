import React from "react";
import { VideoCard, cardStyle } from "../components/VideoCard";
import { useSearchParams } from "react-router-dom";
import useVideos from "../hook/useVideos";

export default function VideoListPage() {
  const [searchParams] = useSearchParams();
  const keyword = searchParams.get("keyword");
  const {
    fetchVideos: { isLoading, error: hasError, data: videos },
  } = useVideos(keyword);

  return (
    <div className="w-4/5 mx-auto pt-4 pb-10">
      {isLoading && <p>Loading...</p>}
      {hasError && <p>error...</p>}
      {videos && (
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 gap-y-2">
          {videos.map((video) => (
            <VideoCard
              key={video.id.videoId}
              video={video}
              cardStyle={cardStyle.large}
            />
          ))}
        </ul>
      )}
    </div>
  );
}
