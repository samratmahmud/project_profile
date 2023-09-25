"use client";
import Button from "@/components/common/Button";
import IconButton from "@/components/common/IconButton";
import Post from "@/components/common/Post";
import Describe from "@/components/template/Describe";
import Links from "@/components/template/Links";
import Profile from "@/components/template/Profile";
import Styk from "@/components/template/Styk";
import Link from "next/link";
import React, {useState} from "react";
import ScrollContainer from "react-indiana-drag-scroll";

let profile = [
  "profile_one.png",
  "profile_two.png",
  "profile_three.png",
  "profile_four.png",
  "profile_five.png",
  "profile_six.png",
];

const tabs = [
  {
    name: "Following",
  },
  {
    name: "Recommended",
  },
];

function Header() {
  const [tab, setTab] = useState(0);

  return (
    <div className="">
      <div className="lg:px-11">
        <div className="flex items-center lg:gap-6 gap-2 mt-12 mb-8 overflow-hidden">
          <div className="flex-shrink-0">
            <h1 className="lg:text-sm text-xs text-neutral-400 font-bold">
              YOUR TOPICS
            </h1>
          </div>
          <div className="flex-1 w-full">
            <ScrollContainer className="">
              <div className="flex lg:gap-4 gap-2 w-0">
                <Links href="/" name="Gaming" />
                <Links href="/" name="Android Development" />
                <Links href="/" name="Freelancing" />
              </div>
            </ScrollContainer>
          </div>
        </div>
        <ScrollContainer vertical={true} className="scroll-container">
          <div className="flex gap-6 mb-8">
            {profile.map((item) => (
              <img src={item} alt="" className="flex-shrink-0 w-16 h-16" />
            ))}
          </div>
        </ScrollContainer>
        <div className="flex gap-7 mb-3">
          {tabs.map(({name}, index) => (
            <Button
              handleClick={() => setTab(index)}
              isActive={tab === index}
              name={name}
            />
          ))}
        </div>
        <hr className="border-slate-400 mb-7" />
        <div className="lg:flex justify-between gap-10 lg:mb-8 items-center">
          <div className="mb-5 lg:mb-0">
            <div className="flex items-center gap-3 mb-3">
              <div>
                <img src="/image 11.png" alt="" />
              </div>
              <div>
                <span className="text-base text-black-900 mr-3">
                  Amira Daifi
                </span>
                <span className="txet-sm text-zinc-500"> Jan 16</span>
              </div>
            </div>
            <div>
              <Describe
                title="Making $300 Per Month With A Telegram Bot?."
                details="🔴 I have coded wrong my whole life. I thought it was okay to just
                      sit down at my desk, open my laptop, take a task from my To-Do list,
                      and code until I felt tired. But in reality, this style of work
                      always killed my productivity..."
              />
            </div>
            <div className="flex justify-between lg:max-w-[460px] items-center mr-5 lg:mr-0">
              <div className="flex gap-6">
                <Links href="/" name="Coding" />
                <Links href="/" name="Work" />
              </div>
              <div className="flex gap-3">
                <IconButton icon="/header_pic.png" />
                <IconButton icon="/simple-line.png" />
              </div>
            </div>
          </div>
          <div className="mb-8 lg:mb-0">
            <img className="w-full" src="./image 12.png" alt="" />
          </div>
        </div>
        <div className="flex flex-col gap-8">
          {[...Array(6)].map((_, index) => (
            <Post writing options key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Header;
