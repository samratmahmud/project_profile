import React from "react";

interface describe {
  title: string;
  details: string;
}

function Describe(props: describe) {
  return (
    <div>
      <div className="text-gray-700 md:text-xl text-base mb-2 font-bold">
        {props.title}
      </div>
      <div className="md:text-lg text-sm text-cyan-800 mb-6 lg:max-w-[475px]">
        {props.details}
      </div>
    </div>
  );
}

export default Describe;
