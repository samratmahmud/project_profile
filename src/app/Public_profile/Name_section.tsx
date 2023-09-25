"use client";
import Button from "@/components/common/Button";
import Post from "@/components/common/Post";
import Link from "next/link";
import React, {useState} from "react";

let buttonName = [
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

function Name_section() {
  let [tab, setTab] = useState(0);

  return (
    <div>
      <div className="">
        <div className="lg:px-11">
          <div className="lg:text-6xl text-4xl text-gray-700 lg:mb-14 mb-6 font-semibold lg:mt-20 mt-7">
            MOHAMED AMINE
          </div>
          <div className="flex gap-7 mb-3">
            {buttonName.map((item, index) => (
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
          <div className="mb-7">
            <hr className="border-slate-400 mb-7" />
          </div>
          <div className="mb-7 flex flex-col gap-6">
            {[...Array(2)].map((_, index) => (
              <Post options key={index} />
            ))}
          </div>
          <div className="lg:mb-12">
            <Link href="./Title">
              <button className="bg-sky-500 flex items-center lg:gap-6 gap-3 py-3 rounded-full text-2xl text-gray-50 lg:pr-20 pr-10 m-auto text-center">
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

export default Name_section;
