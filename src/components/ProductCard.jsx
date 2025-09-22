import React from "react";
import { Star } from "lucide-react";

export const ProductCard = ({ product }) => {
  return (
    <div className="border rounded-md p-4 relative">
      {product.hot && (
        <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-3 py-2">
          HOT
        </span>
      )}

      <div className="flex justify-center h-60 mb-4">
        <img
          src={product.image}
          alt={product.name}
          className="h-60 bg-[#f6f7f8] w-auto object-contain"
        />
      </div>

      <h2 className="text-lg font-semibold mb-1">{product.name}</h2>

      <div className="flex items-center mb-2">
        <div className="flex text-yellow-400 mr-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              size={16}
              fill={i < product.rating ? "yellow" : "none"}
            />
          ))}
        </div>
        <span className="text-sm text-gray-500">({product.ratingCount})</span>
      </div>

      <div className="flex items-center mb-3">
        <span className="text-lg font-semibold text-[#40bfff] mr-2">
          ${product.price.toFixed(2)}
        </span>
        {product.discount && (
          <>
            <span className="line-through text-gray-400 mr-1">
              ${product.originalPrice.toFixed(2)}
            </span>
            <span className="text-red-500 text-sm">
              ({product.discount}% Off)
            </span>
          </>
        )}
      </div>
    </div>
  );
};
