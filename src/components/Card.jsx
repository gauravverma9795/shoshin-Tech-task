import React from "react";

const Card = ({ title, value, subtext, highlight }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md hover:scale-105 duration-5">
      <h3 className="text-sm font-semibold text-gray-500">{title}</h3>
      <div className="text-2xl font-bold mt-2">{value}</div>
      {subtext && <p className="text-gray-400 text-sm">{subtext}</p>}
      {highlight && <p className="text-red-500 text-sm mt-1">{highlight}</p>}
    </div>
  );
};

export default Card;
