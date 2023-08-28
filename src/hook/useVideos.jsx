import { useQuery } from "@tanstack/react-query";
import { useApiContext } from "../context/ApiContext";

export default function useVideos(keyword) {
  const { api } = useApiContext();
  const fetchVideos = useQuery(
    ["videos", keyword],
    async () => api.getVideos(keyword),
    {
      staleTime: 1000 * 60 * 5,
    }
  );

  return { fetchVideos };
}
