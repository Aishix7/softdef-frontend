import { ShoppingCart, Diamond } from "lucide-react";
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
            <span className="font-bold text-xl">E-Comm</span>
          </div>

          <ul className="flex space-x-28">
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
            <div className="flex text-semibold space-x-2">
              <span className="font-medium">Items</span>
              <span className="font-medium text-[#939393]">$0.00</span>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
