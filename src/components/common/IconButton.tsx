import React from "react";

interface IconButtonProps {
  icon: string;
}

function IconButton(props: IconButtonProps) {
  const {icon} = props;

  return (
    <button
      type="button"
      className="aspect-square w-10 p-1 hover:bg-gray-200 rounded-full duration-300 grid place-content-center"
    >
      <img src={icon} alt="" />
    </button>
  );
}

export default IconButton;
