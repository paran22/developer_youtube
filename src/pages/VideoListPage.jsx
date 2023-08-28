import React from "react";
import { VideoCard, cardStyle } from "../components/VideoCard";
import { useSearchParams } from "react-router-dom";
import useVideos from "../hook/useVideos";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export default function VideoListPage() {
  const [searchParams] = useSearchParams();
  const keyword = searchParams.get("keyword");
  const [ref, inView] = useInView();
  const { isLoading, isError, data, fetchNextPage } = useVideos(keyword);
  const videos = isLoading ? [] : data.pages.map((page) => page.items).flat(2);

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage]);

  return (
    <div className="w-4/5 mx-auto pt-4 pb-10">
      {isLoading && <p>Loading...</p>}
      {isError && <p>error...</p>}
      {videos && (
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 gap-y-2">
          {videos.map((video, index) => (
            <VideoCard
              key={`${video.id.videoId}_${index}`}
              video={video}
              cardStyle={cardStyle.large}
            />
          ))}
          <div ref={ref} />
        </ul>
      )}
    </div>
  );
}
