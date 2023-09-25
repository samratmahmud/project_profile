import React from "react";

interface proItem {
  pic: string;
  name: string;
  title: string;
}

function Person_detail(item: proItem) {
  return (
    <div>
      <div className="flex items-center gap-2 mb-2">
        <div>
          <img src={item.pic} alt="picture" />
        </div>
        <div className="text-xs text-gray-700">{item.name}</div>
      </div>
      <div className="md:text-lg text-sm text-gray-700 font-bold">
        {item.title}
      </div>
    </div>
  );
}

export default Person_detail;
