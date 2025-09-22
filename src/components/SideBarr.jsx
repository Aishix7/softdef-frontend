import React, { useState } from "react";

export const SideBar = ({ onColorSelect }) => {
  const [minPrice, setMinPrice] = useState(13.99);
  const [maxPrice, setMaxPrice] = useState(50.99);

  const [hotDealsOpen, setHotDealsOpen] = useState(true);
  const [brandOpen, setBrandOpen] = useState(true);
  const [colorOpen, setColorOpen] = useState(true);

  const toggleHotDeals = () => setHotDealsOpen(!hotDealsOpen);
  const toggleBrand = () => setBrandOpen(!brandOpen);
  const toggleColor = () => setColorOpen(!colorOpen);

  const colors = [
    "#006cff",
    "#171717",
    "#efdfdf",
    "#fc3e39",
    "#ff00b4",
    "#fff600",
  ];

  const handleColorClick = (color) => {
    if (onColorSelect) {
      onColorSelect(color);
    }
  };

  return (
    <div className="flex flex-col bg-white space-y-4 p-2 w-full sm:w-auto">
      <div className="bg-[#f6f7f8] rounded-md px-2 pb-6 gap-4">
        <div
          className="font-[620] text-2xl py-8 px-5 cursor-pointer"
          onClick={toggleHotDeals}
        >
          Hot Deals {hotDealsOpen ? "▲" : "▼"}
        </div>
        {hotDealsOpen && (
          <>
            <div className="flex items-center justify-between p-5 pb-5 font-[490]">
              <div className="font-[490] text-lg">Nike</div>
              <div className=" font-[490] text-lg text-[#acaeb0]">2</div>
            </div>
            <div className="flex items-center justify-between p-5 pb-5">
              <div className="font-[490] text-lg text-[#40BFFF]">Airmax</div>
              <div className=" text-lg text-[#40BFFF]">48</div>
            </div>
            <div className="flex items-center justify-between p-5 pb-5">
              <div className=" text-lg">Nike</div>
              <div className=" text-lg text-[#acaeb0]">14</div>
            </div>
            <div className="flex items-center justify-between p-5 pb-5">
              <div className=" text-lg">Adidas</div>
              <div className=" text-lg text-[#acaeb0]">15</div>
            </div>
            <div className="flex items-center justify-between p-5 pb-5">
              <div className=" text-lg">Vans</div>
              <div className=" text-lg text-[#acaeb0]">23</div>
            </div>
            <div className="flex items-center justify-between p-5 pb-10">
              <div className=" text-lg">All Stars</div>
              <div className=" text-lg text-[#acaeb0]">1</div>
            </div>
          </>
        )}
      </div>

      <div className="flex flex-col p-7 bg-[#f6f7f8] rounded-md pt-2">
        <div className="flex justify-start text-lg font-semibold">PRICES</div>
        <div className="flex items-center justify-between pt-4">
          <span className="text-gray-700 font-medium">Range:</span>
          <span className="text-gray-800 font-semibold">
            ${minPrice.toFixed(2)} - ${maxPrice.toFixed(2)}
          </span>
        </div>
        <div className="relative mt-4">
          <div className="absolute top-1/2 w-full h-1 bg-gray-300 -translate-y-1/2"></div>
          <div
            className="absolute top-1/2 h-1 bg-[#2e90e5] rounded-full -translate-y-1/2"
            style={{
              left: `${(minPrice / 100) * 100}%`,
              right: `${100 - (maxPrice / 100) * 100}%`,
            }}
          ></div>
          <input
            type="range"
            min="0"
            max="100"
            value={minPrice}
            onChange={(e) =>
              setMinPrice(Math.min(Number(e.target.value), maxPrice - 1))
            }
            className="absolute w-full h-1 bg-transparent appearance-none pointer-events-auto accent-[#2e90e5]"
          />
          <input
            type="range"
            min="0"
            max="100"
            value={maxPrice}
            onChange={(e) =>
              setMaxPrice(Math.max(Number(e.target.value), minPrice + 1))
            }
            className="absolute w-full h-1 bg-transparent appearance-none pointer-events-auto accent-[#2e90e5]"
          />
        </div>
      </div>

      <div className="bg-[#f6f7f8] font-medium rounded-md p-7">
        <div className="cursor-pointer" onClick={toggleColor}>
          COLOR {colorOpen ? "▲" : "▼"}
        </div>
        {colorOpen && (
          <div className="flex flex-wrap items-center justify-center p-6 w-full gap-4">
            {colors.map((color) => (
              <input
                key={color}
                type="radio"
                name="color"
                className="w-[1rem] h-[1rem] cursor-pointer rounded-full appearance-none checked:ring-2 checked:ring-offset-2"
                style={{ backgroundColor: color, ringColor: color }}
                onClick={() => handleColorClick(color)}
              />
            ))}
          </div>
        )}
      </div>

      <div className="bg-[#f6f7f8] rounded-md p-7">
        <div className="font-medium cursor-pointer pb-4" onClick={toggleBrand}>
          BRAND {brandOpen ? "▲" : "▼"}
        </div>
        {brandOpen && (
          <div className="flex flex-col">
            <div className="flex items-center justify-between p-5 font-[490]">
              <div className="font-[490] text-lg">Nike</div>
              <div className=" font-[490] text-lg text-[#acaeb0]">99</div>
            </div>
            <div className="flex items-center justify-between p-5 font-[490]">
              <div className="font-[490] text-lg text-[#40BFFF]">Nike</div>
              <div className=" font-[490] text-lg text-[#40BFFF]">99</div>
            </div>
            <div className="flex items-center justify-between p-5 font-[490]">
              <div className="font-[490] text-lg">Adidas</div>
              <div className=" font-[490] text-lg text-[#acaeb0]">99</div>
            </div>
            <div className="flex items-center justify-between p-5 font-[490]">
              <div className="font-[490] text-lg">Siemens</div>
              <div className=" font-[490] text-lg text-[#acaeb0]">99</div>
            </div>
          </div>
        )}
      </div>

      <div className="bg-[#f6f7f8] flex items-center font-medium justify-center rounded-md p-7 cursor-pointer">
        MORE
      </div>
    </div>
  );
};
