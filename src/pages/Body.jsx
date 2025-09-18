import React from "react";
import { Products } from "../components/Products";
import { SideBar } from "../components/Sidebar";

export const Body = () => {
  return (
    <>
      <div className="flex h-screen container m-auto py-4">
        <div className="w-1/4">
          <SideBar />
        </div>

        <div className="w-3/4">
          <Products />
        </div>
      </div>
    </>
  );
};
