import React from "react";
import { Outlet } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Header from './components/Header';
import { ApiContextProvider } from './context/ApiContext';

const queryClient = new QueryClient();

function App() {
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

export default App;
