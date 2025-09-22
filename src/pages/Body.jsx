import React from "react";
import { Products } from "../components/Products";
import { SideBar } from "../components/SideBarr";
import { Footer } from "../components/Footer";

export const Body = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-col lg:flex-row container m-auto py-4 flex-1 gap-4">
        <div className="w-full lg:w-1/4">
          <SideBar />
        </div>

        <div className="w-full lg:w-3/4">
          <Products />
        </div>
      </div>

      <Footer />
    </div>
  );
};
