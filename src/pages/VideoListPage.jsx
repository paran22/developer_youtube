import React, { useEffect, useState } from "react";
import VideoSummary from "../components/VideoSummary";

export default function VideoListPage() {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    fetch("data/dummy.json")
      .then((res) => res.json())
      .then((data) => setVideos(data.items));
  }, []);
  return (
    <div className='w-4/5 mx-auto pt-4 pb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
      {videos.map((video) => (
        <VideoSummary video={video}/>
      ))}
    </div>
  );
}
