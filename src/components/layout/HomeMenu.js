/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";
import MenuItem from "../menu/MenuItem";
import SectionHeader from "./SectionHeader";

export default function HomeMenu() {
  return (
    <section className="">
      <div className="absolute left-0 right-0 w-full justify-start">
        <div className="absolute left-0 -top-[70px] -z-10 text-left">
          <Image src={"/salad1.png"} width={109} height={189} alt={"salad"} />
        </div>
        <div className="absolute -top-[70px] right-0 -z-10">
          <Image src={"/salad2.png"} width={149} height={229} alt={"salad"} />
        </div>
      </div>
      <div className="text-center mb-4">
        <SectionHeader subHeader={"Check Out"} mainHeader={"Menu"} />
      </div>
      <div className="grid grid-cols-3 gap-4">
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
      </div>
    </section>
  );
}
