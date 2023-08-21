import React from "react";
import { GrPersonalComputer } from "react-icons/gr";

export default function Logo() {
  return (
    <div className="flex gap-2 items-center text-light">
      <GrPersonalComputer className="text-5xl bg-light px-1" />
      <span className="text-xl">Developer Youtube</span>
    </div>
  );
}
