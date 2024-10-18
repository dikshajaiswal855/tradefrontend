import React from "react";
import { Link } from "react-router-dom";

const Location = ({ from, to }) => {
  return (
    <div className="pl-52 pt-16 p-4 dark:bg-gray-900 w-full text-sm">
      <Link to={from.url}>
        <span className="hover:underline text-blue-500">{from.title}</span>
      </Link>{" "}
      <Link to={to.url}>
        <span className="">&gt;</span>{" "}
        <span className="hover:underline text-blue-500">{to.title}</span>
      </Link>
    </div>
  );
};

export default Location;
