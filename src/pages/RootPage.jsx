import React from "react";
import Header from "../components/Header";
import VideoListPage from "./VideoListPage";

export default function RootPage() {
  return (
    <div className="bg-background text-light">
      <Header />
      <VideoListPage />
    </div>
  );
}
