"use client";
import Button from "@/components/common/Button";
import Styk from "@/components/template/Styk";
import Link from "next/link";
import React, {useState} from "react";

let tabs = [
  {
    name: "Published",
    url: "/Public_profile",
  },
  {
    name: "In Review",
    url: "/articles",
  },
  {
    name: "Drafts",
    url: "/Title",
  },
];

function Person_sec() {
  let [tab, setTab] = useState(0);

  return (
    <div>
      <div className="">
        <div className="lg:px-11">
          <div className="lg:text-6xl text-4xl text-semi_black lg:mb-14 mb-7 font-semibold lg:mt-20 mt-8 m-auto text-center lg:text-left">
            MOHAMED AMINE
          </div>
          <div className="flex gap-7 mb-3 w-full m-auto justify-center lg:justify-start">
            {tabs.map((item, index) => (
              <div key={index}>
                <Link href={item.url}>
                  <Button
                    handleClick={() => setTab(index)}
                    isActive={tab === index}
                    name={item.name}
                  />
                </Link>
              </div>
            ))}
          </div>
          <div className="lg:mb-[60px] mb-8">
            <hr className="border-slate-400 mb-7" />
          </div>
          <div className="lg:mb-20 mb-10">
            <img
              className="m-auto text-center mb-9"
              src="./Group 83.png"
              alt=""
            />
            <p className="max-w-[167px] m-auto text-center text-2xl text-zinc-500">
              You Dont have any articles in Drafts
            </p>
          </div>
          <div className="lg:mb-12 ">
            <Link href="./Title">
              <button className="bg-[#00A2DD] flex items-center lg:gap-6 gap-3 py-3 rounded-full text-2xl font-bold text-gray-50 lg:pr-20 pr-10 m-auto text-center">
                <img
                  className="lg:pl-10 pl-5"
                  src="./akar-icons_plus.png"
                  alt=""
                />
                Write New Article
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Person_sec;
