import React from "react";
import Link from "next/link";

async function fetchProduct(id) {
  const product = await fetch(`https://dummyjson.com/products/${id}`, {
    cache: "no-store",
  });
  return product.json();
}

const ProductDetail = async ({ params }) => {
  const { id } = params;
  const product = await fetchProduct(id);
  return (
    <div className="flex justify-center">
      <div class="mt-28 flex justify-center items-center h-auto bg-white border border-gray-200 rounded-lg shadow w-3/4">
        <div className="flex h-full md:flex-row flex-col w-full">
          <img
            class="object-cover rounded-t-lg h-full  md:w-1/2 md:rounded-none md:rounded-l-lg"
            src={product.thumbnail}
            alt=""
          />
          <div class="flex flex-col justify-center p-4 leading-normal">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {product.title}
            </h5>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {product.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
