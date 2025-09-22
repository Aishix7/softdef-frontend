import React, { useState } from "react";
import { ProductCard } from "./ProductCard";
import projectImage from "./project.png";
import { LayoutGrid, LayoutList } from "lucide-react";

const productsData = [
  {
    id: 1,
    name: "Nike Air Max 270 React",
    image: projectImage,
    price: 0.43,
    originalPrice: 394.33,
    discount: 24,
    rating: 4,
    ratingCount: 120,
    colors: ["#006cff", "#171717", "#efdfdf", "#fc3e39"],
    hot: true,
  },
  {
    id: 2,
    name: "Nike Air Max 270 React",
    image: projectImage,
    price: 299.43,
    originalPrice: 394.33,
    discount: 24,
    rating: 4,
    ratingCount: 110,
    colors: ["#006cff", "#171717"],
    hot: true,
  },
  {
    id: 3,
    name: "Nike Air Max 270 React",
    image: projectImage,
    price: 245.43,
    originalPrice: 394.33,
    discount: 24,
    rating: 4,
    ratingCount: 110,
    colors: ["#006cff", "#171717"],
    hot: true,
  },
  {
    id: 4,
    name: "Nike Air Max 270 React",
    image: projectImage,
    price: 29.43,
    originalPrice: 394.33,
    discount: 24,
    rating: 4,
    ratingCount: 110,
    colors: ["#006cff", "#171717"],
    hot: true,
  },
  {
    id: 5,
    name: "Nike Air Max 270 React",
    image: projectImage,
    price: 299.43,
    originalPrice: 394.33,
    discount: 24,
    rating: 4,
    ratingCount: 110,
    colors: ["#006cff", "#171717"],
    hot: true,
  },
  {
    id: 6,
    name: "Nike Air Max 270 React",
    image: projectImage,
    price: 299.43,
    originalPrice: 394.33,
    discount: 24,
    rating: 4,
    ratingCount: 110,
    colors: ["#006cff", "#171717"],
    hot: true,
  },
];

export const Products = () => {
  const [sort, setSort] = useState("name");
  const [page, setPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(6);
  const [gridView, setGridView] = useState(true);

  const sortedProducts = [...productsData].sort((a, b) => {
    if (sort === "name") return a.name.localeCompare(b.name);
    if (sort === "priceAsc") return a.price - b.price;
    if (sort === "priceDesc") return b.price - a.price;
    return 0;
  });

  const paginatedProducts = sortedProducts.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  const totalPages = Math.ceil(productsData.length / itemsPerPage);

  return (
    <div className="p-2 space-y-4">
      <div className="w-full h-[350px] rounded-md bg-[#40bfff] flex items-center p-10 justify-between">
        <div className="text-white space-y-4">
          <h1 className="text-3xl font-medium">Adidas Men Running Sneakers</h1>
          <p className="text-lg font-normal">
            Performance and design. Taken right to the edge.
          </p>
          <a href="#" className="text-sm font-semibold underline">
            SHOP NOW
          </a>
        </div>
        <div className=" flex-shrink-0">
          <img
            src={projectImage}
            alt="Project"
            className="h-[250px] w-auto object-contain"
          />
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between bg-white p-4 border rounded-md shadow-sm">
        <div className="font-medium">{productsData.length} items</div>

        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <span>Sort By</span>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="border rounded p-1"
            >
              <option value="name">Name</option>
              <option value="priceAsc">Price: Low to High</option>
              <option value="priceDesc">Price: High to Low</option>
            </select>
          </div>

          <div className="flex items-center space-x-2">
            <span>Show</span>
            <select
              value={itemsPerPage}
              onChange={(e) => setItemsPerPage(Number(e.target.value))}
              className="border rounded p-1"
            >
              <option value={6}>6</option>
              <option value={12}>12</option>
              <option value={18}>18</option>
            </select>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={() => setGridView(true)}
              className={`p-2 border rounded ${
                gridView ? "bg-[#40bfff] text-white" : ""
              }`}
            >
              <LayoutGrid size={20} />
            </button>
            <button
              onClick={() => setGridView(false)}
              className={`p-2 border rounded ${
                !gridView ? "bg-[#40bfff] text-white" : ""
              }`}
            >
              <LayoutList size={20} />
            </button>
          </div>
        </div>
      </div>

      <div
        className={
          gridView
            ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            : "flex flex-col space-y-4"
        }
      >
        {paginatedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="flex items-center justify-center bg-[#f6f7f8] w-[1150px] h-[50px] rounded-md">
        <div className="flex justify-center space-x-2">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i + 1)}
              className={`px-5 py-3 border border-[#40bfff]  ${
                page === i + 1
                  ? "bg-[#40bfff] text-white"
                  : "bg-white text-black"
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
