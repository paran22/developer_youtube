import { useInfiniteQuery } from "@tanstack/react-query";
import { useApiContext } from "../context/ApiContext";

export default function useVideos(keyword) {
  const { api } = useApiContext();
  const { isLoading, isError, error, data, fetchNextPage } = useInfiniteQuery(
    ["videos", keyword],
    async ({ pageParam = "" }) => api.getVideos(keyword, pageParam),
    {
      getNextPageParam: (lastPage) => lastPage.nextPageToken ?? undefined,
    }
  );

  return { isLoading, isError, data, error, fetchNextPage };
}
