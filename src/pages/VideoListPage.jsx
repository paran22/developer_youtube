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
  const { isLoading, isError, error, data, fetchNextPage } = useVideos(keyword);
  const videos =
    isLoading || isError ? [] : data.pages.map((page) => page.items).flat(2);

  useEffect(() => {
    if (inView && !isError) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage, isError]);

  const errorStatus = isError ? error.response.status : "";

  return (
    <div className="w-4/5 mx-auto pt-4 pb-10">
      {isLoading && <p>Loading...</p>}
      {isError && (
        <p>
          Error......
          {errorStatus === 403 ? "YouTube api 용량을 초과하였습니다." : ""}
        </p>
      )}
      {videos && (
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 gap-y-2">
          {videos.map((video, index) => (
            <>
              <VideoCard
                key={`${video.id.videoId}_${index}`}
                video={video}
                cardStyle={cardStyle.large}
              />
              {index % 20 === 14 && <div ref={ref} />}
            </>
          ))}
        </ul>
      )}
    </div>
  );
}
