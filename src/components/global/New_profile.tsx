import React from "react";
import Placehold from "../template/Placehold";
import Styk from "../template/Styk";

let follower = ["1 Articles", "88 Followers", "200 Following"];

function New_profile() {
  return (
    <div className="sticky lg:pt-11 m-auto justify-center">
      <div className="pl-6">
        <div className="mb-7 mt-11">
          <Placehold />
        </div>
        <div className="mb-3">
          <img className="m-auto text-center" src="./image 4.png" alt="" />
        </div>
        <div className="mb-5">
          <h1 className="text-2xl text-gray-700 font-bold mb-2 m-auto text-center">
            MOHAMED AMINE
          </h1>
          <h2 className="text-sm text-gray-700 max-w-[141px] text-center m-auto">
            Software Enginnering Student at INPT
          </h2>
        </div>
        <div className="flex gap-3 mb-8">
          {follower.map((item) => (
            <div className="text-base text-gray-700 font-bold m-auto text-center">
              {item}
            </div>
          ))}
        </div>
        <div className="text-sm text-[#00A2DD] text-center mb-9 cursor-pointer">
          Edite Profile
        </div>
        <div className="mb-9">
          <Styk />
        </div>
        <div className="flex gap-8 justify-between px-8 mb-6">
          <a href="#">
            <img src="./facebook-fill.png" alt="" />
          </a>
          <a href="#">
            <img src="./instagram-fill.png" alt="" />
          </a>
          <a href="#">
            <img src="./twitter-fill.png" alt="" />
          </a>
          <a href="#">
            <img src="./envelope-solid 1.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default New_profile;
