import React from "react";

interface ProfileProps {
  pic: string;
  name: string;
  date: string | number;
}

function Profile(props: ProfileProps) {
  return (
    <div>
      <div className="flex items-center gap-3 mb-3">
        <div>
          <img src={props.pic} alt="" />
        </div>
        <div>
          <span className="text-base text-black-900 mr-3">{props.name}</span>
          <span className="txet-sm text-zinc-500">{props.date}</span>
        </div>
      </div>
    </div>
  );
}

export default Profile;
