import { ShoppingCart, Diamond, Menu } from "lucide-react";
import react from "react";
export const Navbar = () => {
  return (
    <>
      <nav className="text-black bg-white border-[#F6F7F8] p-4">
        <div className="flex items-center container mx-auto justify-between ">
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
            <div className="hidden sm:flex space-x-1 text-sm md:text-base">
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
          <div>
            <a href="/home">HOME</a>
            <a href="/bag">BAG</a>
            <a href="/sneakers">SNEAKERS</a>
            <a href="/belt">BELT</a>
            <a href="/contact">CONTACT</a>
          </div>
        )}
      </nav>
    </>
  );
};
