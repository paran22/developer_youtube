import React from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ApiContextProvider } from "../context/ApiContext";

const queryClient = new QueryClient();

export default function RootPage() {
  return (
    <>
      <Header />
      <ApiContextProvider>
        <QueryClientProvider client={queryClient}>
          <Outlet />
        </QueryClientProvider>
      </ApiContextProvider>
    </>
  );
}
