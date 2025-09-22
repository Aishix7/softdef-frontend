import { ShoppingCart, Menu } from "lucide-react";
import react, { useState } from "react";
import { LogoIcon } from "./LogoIcon";
export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav className="text-black bg-white p-4">
        <div className="flex py-4  border-b-[3px] border-[#f6f7f8] items-center container mx-auto justify-between ">
          <LogoIcon />

          <ul className="hidden md:flex space-x-6 lg:space-x-12 xl:space-x-20">
            <li className="text-[#40BFFF] font-semibold">
              <a href="/home">HOME</a>
            </li>
            <li className="font-semibold">
              <a href="/bag">BAG</a>
            </li>
            <li className="font-semibold">
              <a href="/sneakers">SNEAKERS</a>
            </li>
            <li className="font-semibold">
              <a href="/belt">BELT</a>
            </li>
            <li className="font-semibold">
              <a href="/contact">CONTACT</a>
            </li>
          </ul>
          <div className="flex space-x-4 items-center">
            <ShoppingCart size={22} />
            <div className="hidden sm:flex space-x-3 text-sm md:text-base">
              <span className="font-medium">Items</span>
              <span className="font-medium text-[#939393]">$0.00</span>
            </div>
            <button
              className="md:hidden"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden mt-3 bg-white border-t border-gray-200 flex flex-col items-center space-y-3 py-4">
            <a href="/home" className="font-semibold text-[#40BFFF]">
              HOME
            </a>
            <a href="/bag" className="font-semibold">
              BAG
            </a>
            <a href="/sneakers" className="font-semibold">
              SNEAKERS
            </a>
            <a href="/belt" className="font-semibold">
              BELT
            </a>
            <a href="/contact" className="font-semibold">
              CONTACT
            </a>
          </div>
        )}
      </nav>
    </>
  );
};
