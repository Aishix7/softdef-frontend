import React from "react";
import { LogoIcon } from "../components/LogoIcon";
import {
  CreditCardIcon,
  WalletCardsIcon,
  Facebook,
  Twitter,
} from "lucide-react";

export const Footer = () => {
  return (
    <div className="bg-[#bcddfe] px-4 sm:px-10 lg:px-20 py-12">
      <div className="flex flex-col space-y-12">
        <div className="flex flex-col lg:flex-row justify-between gap-8">
          <div className="flex flex-col space-y-4 w-full lg:w-[60%]">
            <LogoIcon />
            <div className="p-4 rounded-md text-sm text-gray-700">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever. Since the 1500s, when an unknown printer.
            </div>
          </div>

          <div className="flex flex-col space-y-4 w-full sm:w-1/2 lg:w-1/3">
            <div className="font-semibold text-lg">Follow Us</div>
            <div className="text-sm text-gray-700">
              Since the 1500s, when an unknown printer took a galley of type and
              scrambled.
            </div>
            <div className="flex space-x-4">
              <div
                className="w-8 h-8 flex items-center justify-center rounded-full"
                style={{ backgroundColor: "#385C8E" }}
              >
                <Facebook color="white" size={16} />
              </div>
              <div
                className="w-8 h-8 flex items-center justify-center rounded-full"
                style={{ backgroundColor: "#03A9F4" }}
              >
                <Twitter color="white" size={16} />
              </div>
            </div>
          </div>

          <div className="flex flex-col pl-0 lg:pl-8 space-y-2 w-full sm:w-1/2 lg:w-1/3">
            <div className="font-semibold text-lg">Contact Us</div>
            <div className="text-sm text-gray-700">
              E-Comm, 4578 Marmora Road, Glasgow D04 89GR
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="flex flex-col space-y-2">
            <div className="font-semibold">Information</div>
            <div className="text-sm">About Us</div>
            <div className="text-sm">Information</div>
            <div className="text-sm">Privacy Policy</div>
            <div className="text-sm">Terms & Conditions</div>
          </div>
          <div className="flex flex-col space-y-2">
            <div className="font-semibold">Service</div>
            <div className="text-sm">About Us</div>
            <div className="text-sm">Information</div>
            <div className="text-sm">Privacy Policy</div>
            <div className="text-sm">Terms & Conditions</div>
          </div>
          <div className="flex flex-col space-y-2">
            <div className="font-semibold">My Account</div>
            <div className="text-sm">About Us</div>
            <div className="text-sm">Information</div>
            <div className="text-sm">Privacy Policy</div>
            <div className="text-sm">Terms & Conditions</div>
          </div>
          <div className="flex flex-col space-y-2">
            <div className="font-semibold">Our Offers</div>
            <div className="text-sm">About Us</div>
            <div className="text-sm">Information</div>
            <div className="text-sm">Privacy Policy</div>
            <div className="text-sm">Terms & Conditions</div>
          </div>
        </div>

        <div className="border-t border-white pt-4 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-sm text-gray-700 text-center sm:text-left">
            © 2018 Ecommerce theme by www.bisenbaev.com
          </div>
          <div className="flex space-x-4 text-gray-700 justify-center sm:justify-start">
            <CreditCardIcon size={32} />
            <WalletCardsIcon size={32} />
            <CreditCardIcon size={32} />
            <WalletCardsIcon size={32} />
          </div>
        </div>
      </div>
    </div>
  );
};
