import React from "react";
import ChannelInfo from "./ChannelInfo";
import useChannel from "../hook/useChannel";
import useVideo from "../hook/useVideo";

export default function VideoDetailCard({ videoId, channelId }) {
  const {
    isLoading: isLoadingInChannel,
    isError: isErrorInChannel,
    data: channel,
  } = useChannel(channelId);
  const {
    isLoading: isLoadingInVideo,
    isError: isErrorInVideo,
    data: video,
  } = useVideo(videoId);
  return (
    <>
      {isLoadingInChannel && <p>Loading...</p>}
      {isLoadingInVideo && <p>Loading...</p>}
      {isErrorInChannel && <p>error...</p>}
      {isErrorInVideo && <p>error...</p>}
      {channel && video && (
        <section className="flex flex-col gap-2">
          <iframe
            className="aspect-video"
            title={video.snippet.title}
            id="ytplayer"
            type="text/html"
            src={`https://www.youtube.com/embed/${videoId}`}
            frameBorder="0"
            allowFullScreen
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
