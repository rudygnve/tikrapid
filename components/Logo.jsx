import { SITENAME } from "@/data";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <div>
      <Link
        href="/"
        className="text-2xl sm:text-3xl font-semibold text-slate-800 flex items-center gap-2"
      >
        <img className="w-8 sm:w-10" src="/assets/logo.svg" alt="Logo" />
        {SITENAME}
      </Link>
    </div>
  );
};

export default Logo;
