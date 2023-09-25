import React from "react";

function Middel() {
  return (
    <div>
      <div className="lg:ml-16 lg:mr-12">
        <div className="flex items-center justify-between lg:mt-14 mt-8 mb-7">
          <div className="flex gap-3.5">
            <div>
              <img src="./image 11 (5).png" alt="" />
            </div>
            <div>
              <div className="text-2xl text-black-900">Amira Daifi</div>
              <div className="text-xl text-zinc-500">Jan 16</div>
            </div>
          </div>
          <div className="flex gap-3 mr-3 lg:mr-1">
            <img className="w-4 h-4" src="./header_pic.png" alt="" />
            <img className="w-3 h-3" src="./simple-line.png" alt="" />
          </div>
        </div>
        <div className="lg:text-5xl text-3xl text-gray-700 font-bold mb-5">
          Is flutter worth learning in 2022?
        </div>
        <div className="lg:text-3xl text-lg text-gray-700 lg:max-w-[580px] mb-6">
          It is always a good approach to learn new frameworks or technology to
          improve your tech skills. But is flutter worth learning in 2022?
        </div>
        <div className="mb-7">
          <img className="w-full" src="./image 13.png" alt="" />
        </div>
        <div className="lg:max-w-[584px] lg:mb-4 mb-7">
          <h1 className="lg:text-3xl text-xl text-gray-700 mb-5">
            Here are some of the keys that make flutter was born way different
            than other frameworks.
          </h1>
          <h2 className="lg:text-3xl text-xl text-gray-700 mb-5">
            {" "}
            <p>Greate UI</p> I meant really great UI, It is by definition
            built-in for beautiful UI. Flutter has very good resources on great
            UI and animation.
          </h2>
          <h3 className="lg:text-3xl text-xl text-gray-700 mb-5">
            {" "}
            <p>Native Performance</p> Flutter doesn't use any webview or web
            technology such as HTML to render view/UI. It uses dart language and
            canvas bridge to build beautiful animated UI.
          </h3>
          <h4 className="lg:text-3xl text-xl text-gray-700">
            {" "}
            <p>Canvas Advantage</p> Flutter uses Canvas to draw UI in your
            application and since all platforms such as Mobiles, Desktop, and
            the web support canvas, Flutter has the advantage of multiplatform
            support. re_crappy apps in a flutter in the coming future too
            (😁😁😁).
          </h4>
        </div>
        <div className="flex items-center justify-between bg-slate-400 rounded-full sm:py-4 py-2 m-auto text-center mb-6 max-w-[430px]">
          <div className="flex items-center gap-2">
            <img
              className="pl-7 cursor-pointer"
              src="./ant-design_like-filled.png"
              alt=""
            />
            <p className="text-3xl text-gray-700">200</p>
          </div>
          <div className="flex items-center gap-3">
            <img
              className="cursor-pointer"
              src="./fa6-solid_comment.png"
              alt=""
            />
            <p className="text-3xl text-gray-700">50</p>
          </div>
          <div className="pr-14">
            <img
              className="w-7 h-6 cursor-pointer"
              src="./simple-line.png"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Middel;
