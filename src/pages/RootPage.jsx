import React from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";

export default function RootPage() {
  return (
    <div className="bg-background text-light">
      <Header />
      <Outlet />
    </div>
  );
}
