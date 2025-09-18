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
        </div>
      </nav>
    </>
  );
};
