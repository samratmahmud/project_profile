"use client";
import Links from "@/components/template/Links";
import Person_detail from "@/components/template/Person_detail";
import Placehold from "@/components/template/Placehold";
import Styk from "@/components/template/Styk";
import React from "react";

function Aside() {
  return (
    <div className="">
      <div className="sticky top-11 pb-10">
        <div className="lg:ml-8">
          <div className="mb-8 mt-5 lg:mt-0">
            <Placehold />
          </div>
          <div className="flex items-center gap-2 mb-5">
            <div>
              <img src="./Ellipse 5.svg" alt="" />
            </div>
            <div className="text-xl text-gray-700 font-bold">
              What Trending Today
            </div>
          </div>
          <div>
            <div className="lg:max-w-[262px] mb-3">
              <Person_detail
                pic="image 11 (2).png"
                name="Scott Galloway"
                title="
                The Attention Economy is Making Us Stupid"
              />
            </div>
            <div className="mb-3 lg:max-w-[240px]">
              <Person_detail
                pic="image 11 (3).png"
                name="Meredith Cummings"
                title="I Raised My Child in a Shopping Mall"
              />
            </div>
            <div className="lg:max-w-[279px] mb-6">
              <Person_detail
                pic="image 11 (4).png"
                name="Ella Alderson"
                title="We’re Uncovering One of AI’s Deepest Mysteries"
              />
            </div>
            <div>
              <div>
                <hr className="border-slate-400 mb-5 h-1" />
              </div>
            </div>
            <div className="text-xl text-gray-700 mb-6 font-bold">
              Recommended topics
            </div>
          </div>
          <div className="flex flex-wrap gap-x-3 gap-y-5">
            <Links href="/" name="Cosmic" />
            <Links href="/" name="Flutter App Dev" />
            <Links href="/" name="IOS App Dev" />
            <Links href="/" name="Politics" />
            <Links href="/" name="Religion" />
            <Links href="/" name="Finance" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aside;
