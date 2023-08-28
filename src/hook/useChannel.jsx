import React from "react";
import { useApiContext } from "../context/ApiContext";
import { useQuery } from "@tanstack/react-query";

export default function useChannel(channelId) {
  const { api } = useApiContext();
  const { isLoading, isError, data } = useQuery(
    ["channels", channelId],
    async () => api.getChannel(channelId),
    {
      staleTime: 1000 * 60 * 5,
    }
  );

  return { isLoading, isError, data };
}
