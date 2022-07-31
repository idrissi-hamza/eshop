import React from "react";
import svgs from "../utils/svgs";

const Specification = ({ plant }) => {
  return (
    <ul className="flex  text-black space-x-6">
      {svgs.slice(0, 3).map((el, i) => (
        <li key={i} className="flex flex-col justify-center items-center ">
          {el.svg}
          <span className="font-bold text-sm">{el.specification}</span>
          <span className="text-sm">{plant.specifications[i]}</span>
        </li>
      ))}
    </ul>
  );
};

export default Specification;
