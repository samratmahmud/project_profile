import Placehold from "@/components/template/Placehold";
import React from "react";

function Articles_profile() {
  return (
    <div>
      <div className="lg:ml-6 sticky top-11 m-auto text-center">
        <div className="mb-8">
          <Placehold />
        </div>
        <div className="mb-4">
          <img className="m-auto text-center" src="./image 12 (2).png" alt="" />
        </div>
        <div className="text-2xl text-gray-700 font-bold mb-3.5 m-auto text-center">
          AMIRA DAIFI
        </div>
        <div className="max-w-[254px] text-sm text-gray-700 mb-4 m-auto text-center">
          Native Android / Flutter Developer | Flutter enthusiast | Content
          Creator
        </div>
        <div className="text-base text-gray-700 font-bold mb-7 m-auto text-center">
          88 Followers
        </div>
        <div className="m-auto text-center mb-6 lg:mb-0">
          <button className="text-gray-50 text-sm font-bold bg-sky-500 py-3 px-12 rounded-full">
            Follow
          </button>
        </div>
      </div>
    </div>
  );
}

export default Articles_profile;
