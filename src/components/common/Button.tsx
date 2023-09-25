import React from "react";

interface IButtonProps {
  name: string;
  isActive?: boolean;
  handleClick?: () => void;
}

function Button(props: IButtonProps) {
  const {name, isActive, handleClick} = props;

  return (
    <div onClick={handleClick}>
      <div
        className={`text-base font-bold cursor-pointer ${
          isActive ? "text-sky-500" : "text-gray-700"
        }`}
      >
        {name}
      </div>
    </div>
  );
}

export default Button;
