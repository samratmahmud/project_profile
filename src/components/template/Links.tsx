import Link from "next/link";
import React from "react";

export interface allLinks {
  name: string;
  href?: string;
}

function Links(props: allLinks) {
  return (
    <Link
      href={props.href || "/"}
      className="md:text-base text-xs text-gray-700 py-2 lg:px-6 px-4 font-medium bg-slate-400 rounded-full cursor-pointer whitespace-nowrap hover:bg-gray-300 duration-500"
    >
      {props.name}
    </Link>
  );
}

export default Links;
