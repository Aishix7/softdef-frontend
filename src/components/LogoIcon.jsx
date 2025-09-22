import React from "react";

export const LogoIcon = () => {
  return (
    <div className="flex items-center space-x-2">
      <div className="bg-[#40BFFF] w-[53px] h-[44px] rounded-[15px] flex items-center justify-center">
        <svg
          width="19.56"
          height="22.67"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-[20.56px] h-[24.67px]"
        >
          <polygon points="12 4 21 12 12 20 2.8 12" />
        </svg>
      </div>
      <span className="font-bold text-lg sm:text-xl">E-Comm</span>
    </div>
  );
};
