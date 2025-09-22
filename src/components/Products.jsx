import React from "react";
import projectImage from "./project.png";

export const Products = () => {
  return (
    <div className="p-2 flex flex-grow">
      <div className="w-[1200px] h-[350px] rounded-md bg-[#40bfff] flex items-center p-10 justify-between">
        <div className="text-white space-y-4">
          <h1 className="text-3xl font-medium">Adidas Men Running Sneakers</h1>
          <p className="text-lg font-normal">
            Performance and design. Taken right to the edge.
          </p>
          <a href="#" className="text-sm font-semibold underline">
            SHOP NOW
          </a>
        </div>

        <div className=" flex-shrink-0">
          <img
            src={projectImage}
            alt="Project"
            className="h-[250px]  w-auto bg-[#40bfff] object-contain"
          />
        </div>
      </div>
    </div>
  );
};
