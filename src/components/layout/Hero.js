import Image from "next/image";
import React from "react";
import Right from "../icons/Right";

export default function Hero() {
  return (
    <>
      <section className="hero mt-8">
        <div className="py-12">
          <h1 className="text-4xl font-semibold">
            Everything
            <br />
            is better
            <br />
            with a&nbsp;
            <span className="text-primary">Pizza</span>
          </h1>
          <p className="my-6 text-gray-500 text-sm">
            Pizza is the missing piece that makes every day complete, a simple
            yet delicious joy in life
          </p>

          <div className="flex gap-4 text-nowrap text-sm">
            <button className="bg-primary uppercase flex gap-2 text-white p-4   items-center rounded-full">
              Đặt ngay
            </button>
            <button className="flex border items-center rounded-full gap-2 p-4  text-gray-600">
              Tìm hiểu thêm
            </button>
          </div>
        </div>
        <div className="relative">
          <Image
            src={"/pizza.png"}
            layout={"fill"}
            objectFit={"contain"}
            alt={"pizza"}
          />
        </div>
      </section>
    </>
  );
}
