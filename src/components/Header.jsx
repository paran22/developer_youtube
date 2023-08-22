import React from "react";
import Logo from "./Logo";
import Search from "./Search";

export default function Header() {
  return (
    <header className="flex w-5/6 mx-auto py-4 items-center justify-between px-4">
      <Logo />
      <Search />
    </header>
  );
}
