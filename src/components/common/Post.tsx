import React from "react";
import IconButton from "./IconButton";
import Links from "../template/Links";
import Styk from "../template/Styk";
import Describe from "../template/Describe";
import Profile from "../template/Profile";

interface PostProps {
  writing?: boolean;
  options?: boolean;
}

function Post(props: PostProps) {
  const {options, writing} = props;
  return (
    <div>
      <div className="lg:flex justify-between gap-10 lg:mb-8 items-center">
        <div className="mb-5 lg:mb-0">
          <div>
            <Profile pic="./image 11 (1).png" name="Ahmed Omar" date="Jan 16" />
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
              {writing && <IconButton icon="/header_pic.png" />}
              {options && <IconButton icon="/simple-line.png" />}
            </div>
          </div>
        </div>
        <div>
          <img className="w-full" src="./image 12.png" alt="" />
        </div>
      </div>
      <div className="hidden lg:block">
        <Styk />
      </div>
    </div>
  );
}

export default Post;
