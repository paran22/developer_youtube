import React from "react";
import { GrPersonalComputer } from "react-icons/gr";
import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link to='/'>
      <div className="flex gap-2 items-center text-light">
        <GrPersonalComputer className="text-5xl bg-light px-1" />
        <span className="text-xl">Developer Youtube</span>
      </div>
    </Link>
  );
}
