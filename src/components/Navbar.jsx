import { ShoppingCart } from "lucide-react";
import react from "react";
export const Navbar = () => {
  return (
    <>
      <nav className="text-black p-4">
        <div className="flex items-center container mx-auto justify-between ">
          <div className="flex items-center">
            <div className="bg-blue-400 rounded-full p-2">diamond-logo</div>
            <span className="font-bold text-xl">E-Comm</span>
          </div>
          <ul className="flex space-x-7">
            <li>
              <a href="/home">HOME</a>
            </li>
            <li>
              <a href="/bag">BAG</a>
            </li>
            <li>
              <a href="/sneakers">SNEAKERS</a>
            </li>
            <li>
              <a href="/belt">BELT</a>
            </li>
            <li>
              <a href="/contact">CONTACT</a>
            </li>
          </ul>
          <div className="flex space-x-4 items-center">
            <ShoppingCart size={24} />
            <div className="flex text-semibold space-x-2">
              <span>Items</span>
              <span className="font">$0.00</span>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
