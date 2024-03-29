import React, { useState } from "react";
import Sidebar from "./sidebar";
import CustomizedHeader from "./header";

const CustomizedLayout = ({ children }) => {
  return (
    <div className="md:flex md:h-screen h-auto overflow-hidden bg-secondary">
      <div
        className={`w-1/6 bg-white shadow-xl rounded md:block hidden`}
      >
        <Sidebar />
      </div>

      <div className="flex-1 overflow-y-auto">
        <CustomizedHeader />
        <div className="py-6 px-10">{children}</div>
      </div>
    </div>
  );
};

export default CustomizedLayout;
