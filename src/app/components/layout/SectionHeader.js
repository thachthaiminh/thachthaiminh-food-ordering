import React from "react";

export default function SectionHeader({ subHeader, mainHeader }) {
  return (
    <>
      <h3 className="uppercase leading-4 text-gray-600 font-semibold">
        {subHeader}
      </h3>
      <h2 className="text-primary font-bold text-4xl italic">{mainHeader}</h2>
    </>
  );
}
