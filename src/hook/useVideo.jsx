import { useApiContext } from "../context/ApiContext";
import { useQuery } from "@tanstack/react-query";

export default function useVideo(videoId) {
  const { api } = useApiContext();
  const { isLoading, isError, data } = useQuery(
    ["video", videoId],
    async () => api.getVideo(videoId),
    {
      staleTime: 1000 * 60 * 1,
    }
  );
  return { isLoading, isError, data };
}
