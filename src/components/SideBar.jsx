import React from "react";

export const SideBar = () => {
  return (
    <>
      <div className="flex flex-col">
        <div className="bg-[#f6f7f8] rounded-md px-2 ">
          <div className="font-[620] text-2xl py-8 px-5">Hot Deals</div>

          <div className="flex items-center justify-between p-5 pb-5">
            <div className="font-medium text-lg">Nike</div>
            <div className=" font-medium text-lg text-[#acaeb0]">2</div>
          </div>
          <div className="flex items-center justify-between p-5 pb-5">
            <div className="font-medium text-lg">Airmax</div>
            <div className=" font-medium text-lg text-[#acaeb0]">48</div>
          </div>
          <div className="flex items-center justify-between p-5 pb-5">
            <div className="font-medium text-lg">Nike</div>
            <div className=" font-medium text-lg text-[#acaeb0]">14</div>
          </div>
          <div className="flex items-center justify-between p-5 pb-5">
            <div className="font-medium text-lg">Adidas</div>
            <div className=" font-medium text-lg text-[#acaeb0]">15</div>
          </div>
          <div className="flex items-center justify-between p-5 pb-5">
            <div className="font-medium text-lg">Vans</div>
            <div className=" font-medium text-lg text-[#acaeb0]">23</div>
          </div>
          <div className="flex items-center justify-between p-5 pb-5">
            <div className="font-medium text-lg">All Stars</div>
            <div className=" font-medium text-lg text-[#acaeb0]">1</div>
          </div>
          <div className="flex items-center justify-between p-5 pb-10">
            <div className="font-medium text-lg">Adidas</div>
            <div className=" font-medium text-lg text-[#acaeb0]">95</div>
          </div>
        </div>
        <div>Prices</div>
        <div>Color</div>
        <div>Brand</div>
        <div>More</div>
      </div>
    </>
  );
};
