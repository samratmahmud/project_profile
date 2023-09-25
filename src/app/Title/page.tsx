import Link from "next/link";
import React from "react";

function page() {
  return (
    <div className="container">
      <div className="flex justify-between mb-7 mt-9 items-center">
        <Link href={"/"}>
          <div className="flex items-center gap-7">
            <div>
              <img src="./nav_logo.png" alt="" />
            </div>
            <div className="text-2xl font-bold text-gray-700 hidden md:block">
              New Article
            </div>
          </div>
        </Link>
        <div className="flex md:gap-5 items-center">
          <div>
            <div className="flex md:gap-9 gap-4">
              <button className="text-sm text-[#00A2DD] font-bold md:py-3 py-1.5 md:px-6 px-3 border-solid border-[2px] border-sky-500 rounded-full">
                Save to drafts
              </button>
              <button className="bg-green-500 text-sm font-bold md:py-3 py-1.5 md:px-11 px-6 rounded-full text-gray-50">
                Publish
              </button>
            </div>
          </div>
          <div className="hidden md:block">
            <img src="./image 4 (1).png" alt="" />
          </div>
        </div>
      </div>
      <div className="md:ml-[12%]">
        <div className="text-7xl text-gray-400 mb-6">Title</div>
        <div className="md:text-4xl text-2xl text-gray-400">
          <textarea
            className="lg:w-[60%] w-full p-5 focus:outline-none"
            name=""
            id=""
            placeholder="Tell your article content..."
          ></textarea>
        </div>
      </div>
    </div>
  );
}

export default page;
