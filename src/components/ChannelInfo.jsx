import React from "react";

export default function ChannelInfo({ channel }) {
  const { thumbnails, title } = channel;
  return (
    <section className="flex items-center gap-3">
      <img
        className="w-9 h-9 rounded-full"
        src={thumbnails.medium.url}
        alt={""}
      />
      <p className="opacity-90 font-semibold">{title}</p>
    </section>
  );
}
