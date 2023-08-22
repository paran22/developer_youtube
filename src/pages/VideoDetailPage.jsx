import React from "react";
import { useLocation } from "react-router-dom";

export default function VideoDetailPage() {
  const location = useLocation();
  const video = { ...location.state.vedio };
  return <div></div>;
}
