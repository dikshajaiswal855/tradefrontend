import React from "react";
import SideNavbar from "../components/SideNavbar"; // Import the sidebar
import HSView from "./hs_view"; // Import the HS content

const HS_Comp = () => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <SideNavbar />
      
      {/* Main content area */}
      <div className="flex-grow p-5 ml-60"> {/* Adjusted margin for the sidebar */}
        <HSView /> {/* Rendering the HSView component */}
      </div>
    </div>
  );
};

export default HS_Comp;
