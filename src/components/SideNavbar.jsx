// this is sidebar component, used in only Profile_With_Sidenavbar.jsx

import React, { useEffect, useState } from "react";

import { Link, useLocation } from "react-router-dom";

import ProfileLogo from "../assets/logo/ant-design_api-outlined.svg";
import ProductLogo from "../assets/logo/fluent-mdl2_product-catalog.svg";
import APILogo from "../assets/logo/ant-design_api-outlined (1).svg";

const SideNavbar = () => {
  const [url, seturl] = useState("");

  const location = useLocation();

  useEffect(() => {
    console.log(window.location.pathname);
    seturl(window.location.pathname);
  }, [location]);

  const routesArray = [
    {
      title: "Profile",
      logo: ProfileLogo,
      url: "/profile",
    },
    {
      title: "Product",
      logo: ProductLogo,
      url: "/product",
      subRoutes: [
        {
          title: "HS",
          url: "/hs",
        },
        {
          title: "Calculate",
          url: "/calculate",
        },
        { title: "Complines", url: "/complines" },
      ],
    },
    {
      title: "API",
      logo: APILogo,
      url: "/api",
    },
  ];
  return (
    <div
      className={`fixed left-0 top-0 pt-24 flex flex-col  min-h-screen lg:w-60 dark:bg-gray-900 border-r dark:border-gray-700 p-3`}
    >
      {routesArray.map((route, index) => (
        <>
          <Link to={route.title !== "Product" ? route.url : "#"} key={index}>
            <div
              key={index}
              className={`flex items-center gap-1 transition-all duration-200 cursor-pointer p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800`}
            >
              <img
                src={route.logo}
                alt="logo"
                className="w-5 h-5 object-contain dark:invert"
              />
              <p className="ml-2 font-semibold">{route.title}</p>
            </div>
          </Link>
          {route.subRoutes && (
            <div className="ml-4 text-sm">
              {route.subRoutes.map((subRoute, i) => (
                <Link key={i} to={subRoute.url}>
                  <div
                    key={i}
                    className={`flex ${
                      subRoute.url == url ? "text-[#407bff]" : "text-gray-600"
                    } items-center cursor-pointer p-2 rounded-lg transition-all duration-200 hover:bg-gray-100 dark:hover:bg-gray-800`}
                  >
                    <p className="ml-2">{subRoute.title}</p>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </>
      ))}
    </div>
  );
};

export default SideNavbar;
