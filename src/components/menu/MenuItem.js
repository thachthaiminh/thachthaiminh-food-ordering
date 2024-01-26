/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function MenuItem() {
  return (
    <>
      <div className="bg-gray-200 p-4 rounded-lg text-center group hover:bg-white hover:shadow-md hover:shadow-md hover:shadow-black/25 transition-all">
        <img
          src="/pizza.png"
          className="max-h-auto max-h-24 block mx-auto"
          alt="pizza"
        />
        <h4 className="font-semibold text-xl my-2">Peperoni Pizza</h4>
        <p className="text-gray-500 text-sm">SASSS</p>
        <button className="mt-4 bg-primary text-white rounded-full px-6 py-2 ">
          Thêm vào giỏ hàng
        </button>
      </div>
    </>
  );
}
